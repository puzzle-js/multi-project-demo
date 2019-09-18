# PuzzleJs Multi Project Demo
This demo is a PuzzleJs implementation with 1 storefront 2 gateway projects. We recommend keeping the projects in different repositories, for simplicity we use one repository in this demo. For easy usage, we add a build script.

*** Note: This demo use 'yarn', if you want to use another package manager you can not use tools/builder.js script (yarn build). For building all projects you need to load packages in projects and fragments.

## Install
```
yarn 
yarn build
```

## Run 
All projects must be run separately. 
### BrowsingGW
```
cd browsing-gw/
yarn start
```
* starts at https://localhost:4443/
* HTTPS/H2 active
### PlatformGW
```
cd platform-gw/
yarn start
```
* starts at http://localhost:4444/
### Storefront
```
cd storefront/
yarn start
```
* starts at https://localhost:4445/
* HTTPS active
