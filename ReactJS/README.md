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

**Step 6)** To use Redux in your application, run the following commands : 
```
npm install redux
npm install react-redux
```


## Running the Project

You can run the project using the following command
```
npm start
```

You can click 
[here](https://www.youtube.com/watch?v=iuj86pSduu0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1)
to watch React and Redux Tutorials.
