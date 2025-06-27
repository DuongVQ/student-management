# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Setting all librarys displayed in package.json

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Directory structure
- node_modules: library of nodejs and you shouldn't push them to github
- public: include folder images to provide img
- src: 
    + App.js: you will code  the content of website at here
    + App.css: style for App page
    + index.js: layout of website and you need to device some component before coding
    + index.css: general style of website
- .ignore: not allowed some folder can push to github
- .prettierrc: format code
- Dockerfile: use for docker
- package.json: include library of nodejs

## How to build Docker
- Create file `Dockerfile` to build project
- Create file: `.dockerignore` to not allow push `Dockerfile` to Git
- In the folder inclues `Dockerfile`:
```bash
  # create image
  docker build -t frontend .

  # run
  docker run -d -p 3000:3000 frontend

  # stop
  docker stop <NAME> 
  
  # remove
  docker rm <NAME>

  # display list container
  docker ps

  # display image
  docker images

  # remove image
  docker rmi <Repository> || docker rmi -f <Repository> 
```

## How to use the web
- This is the website to manager students

![interface of website](/public/images/interface.png)
