# ReactJS


## Project Setup

**Step 1)** Initialize project with npx using : 
```
npx create-react-app <app-name>
```
If issue of system limit for file watchers reached occurs, then Run the following commands
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**Step 2)** Next install the required dependency using the following command : 
```
npm install react-router-dom
```

**Step 3)** Remove unwanted files like **logo.svg** and **App.css**


**Step 4)** To get rid of git version control (to later use your own), use the following command : 
```
rm -rf .git
```


**Step 5)** Copy the required sample codes from the repo.


## Running the Project

You can run the project using the following command
```
npm start
```
