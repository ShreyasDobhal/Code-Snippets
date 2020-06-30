# SQL commands


To open a database
```
.open SQLDataBaseName.db
```


To create a table in a db
```
CREATE TABLE tableName(id int,name string ...,PRIMARY KEY(id));
```


To insert values in a table
```
INSERT INTO tableName VALUES(1,"Name",..);
```


To get entries from a table
```
SELECT * FROM tableName;
SELECT * FROM tableName WHERE name="..";
SELECT * FROM tableName WHERE age between 18 and 60;
SELECT * FROM tableName ORDER BY age;
SELECT * FROM tableName ORDER BY age desc;
```


To use aggregate functions
```
SELECT COUNT(*) FROM tableName;
SELECT MIN(age), MAX(age), AVG(age) FROM tableName;
SELECT SUM(age) FROM tableName;
```


To update values in a table
```
UPDATE tableName SET Name=".." WHERE id=1;
UPDATE tableName SET Name="..", Email=".." WHERE id=1;
```


To delete entries from a table
```
DELETE FROM tableName WHERE id=1;
DELETE FROM tableName WHERE id=1 and Name="..";
```


To exit from the sqlite3
```
.quit
```
