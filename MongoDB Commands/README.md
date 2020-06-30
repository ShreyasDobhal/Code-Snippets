# MongodDB Commands


To start mongod process 
```
sudo systemctl start mongod
```

If failed to start, try to reload it 
```
sudo systemctl daemon-reload
```

To check if MongoDB has started
```
sudo systemctl status mongod
```

To make it start after a system reboot
```
sudo systemctl enable mongod
```

To stop the mongod process
```
sudo systemctl stop mongod
```

To restart the mongod process
```
sudo systemctl restart mongod
```


### Mongo commands

To get all the current databases
```
db 
```


To get all dbs 
```
show dbs 
```


To switch to a particular database (If not present creates one)
```
use <db-name>
```


To create a collection
```
db.createCollection('<collection-name>')
```


To get all collections in current db 
```
show collections
```


To insert a document inside a collection 
```
db.<collection-name>.insert({key:value,..})
db.<collection-name>.insertOne({key:value,..})
db.<collection-name>.insertMany([{..},..])
```


To get complete collection
```
db.<collection-name>.find()
```


To view the collecton in more readable format
```
db.<collection-name>.find().pretty()
```


To get those documents which have a particular value for a given key
```
db.<collection-name>.find({ key:value })
db.<collection-name>.find({ key:{$gte:value} })
```
[You can use the following wildcards as relational operators : gte,gt,lt,lte]
```
db.<collection-name>.find({ key1:val1,key2:val2 })
db.<collection-name>.find({ $or:[ {key1:val1},{key2:val2} ] })
```


To search for documents based on arrays
```
db.<collection-name>.find({key:[val1,val2,..]})
db.<collection-name>.find({ key:{ $all:[val1,val2,..]} })
db.<collection-name>.find({ key:{ $all:[val1,val2,..]} })
db.<collection-name>.find({ key:val })
```


To get only selected data from fetched documents 
```
db.<collection-name>.find( {key:value} , {key:1} )
```


To get sorted data
```
db.<collection-name>.find(..).sort({key:1})
db.<collection-name>.find(..).sort({key:-1})
```


To limit data received
```
db.<collection-name>.find(..).skip(2)
db.<collection-name>.find(..).limit(2)
```


To delete entries 
```
db.<collection-name>.deleteOne( {..} )
db.<collection-name>.deleteMany( {..} )
```


To update an entry
```
db.<collection-name>.updateOne( {key:value} , {$set: {key:value}} )
db.<collection-name>.updateMany( {key:value} , {$set: {key:value}} )
db.<collection-name>.updateOne( {key:value} , {$push: {arraykey:value}} )
db.<collection-name>.updateOne( {key:value} , {$pull: {arrayname: {<condition>} }} )
```


Aggregation Functions
```
db.<collection-name>.aggregate([{$match:{status:"A"}} , {$group:{_id:"$cust_id",total:{$sum:"$amount"}}}])
db.<collection-name>.mapReduce(<..>)
db.<collection-name>.distinct("cust_id")
db.<collection-name>.aggregate([{$project:{key1:1,key2:1,..}}])
```


Look-ups 
```
db.<collection-name1>.aggregate([{$match:{key:value}} , {$lookup:{from:<collection-name2>, localField:key1, foreignField:key2, as:keyNew}}])
```


Using Indexes
```
db.<collection-name>.getIndexes()
db.<collection-name>.createIndex({key:1})
```


