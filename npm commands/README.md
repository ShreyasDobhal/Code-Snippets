# NPM Commands

To use npm in your project,

Use 
```
npm init 
```
And enter the required information

To install a package, use :
```
npm install <packagename>
```


To install a specific package version, use : 
```
npm install <packagename>@<version>
```


To install all the required packages as mentioned by the package.json, use :
```
npm install
```


To install only in development environment, use : 
```
npm install <packagename> --save-dev
```


To install the package globally, use : 
```
npm install <packagename> --global
```


To check the version of installed package, use : 
```
npm view <packagename> version
```


In package.json 
* ^ means exactly same version would be installed
* ~ means any higher patch can get installed
* \> means any higher version can get installed
