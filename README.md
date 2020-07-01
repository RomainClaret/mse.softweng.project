# About this project
Bonus Project for the MSE Softweng class at HES-SO
- Build a Resume Website in React
- Using Redux for Comments
- Dockerized
- Tracing?

![](public/pictures/mse-softweng-project-screenshot.png)

## Author
Romain Claret

## Inspired by
- https://github.com/tbakerx/react-resume-template
- https://github.com/caljrimmer/portfolio-redux-app
- https://github.com/reitersg/article-blogspot

## React Redux tutorial
- https://www.valentinog.com/blog/redux/

## Tracing tutorial and api
- https://dev.to/finallynero/redux-action-stack-trace-1m0d
- https://www.npmjs.com/package/react-tracking

## With help of
- https://gitlab.com/jamesmenetrey/hesso-softweng-project


# RUN PROJECT
## BUILD DOCKER CONTAINER
`docker build -t react-docker-app .`
## RUN DOCKER CONTAINER ON PORT 8080
`docker run -it -p 8080:80 react-docker-app`


# SIDE NOTE: CREATE REACT APP BOOTSTRAPPED
## INSTALL NPM PACKAGE GLOBALLY
`npm install create-react-app --global`
## RUN REACT APP BOOTSTRAPPER
`create-react-app react-docker-app`
## RUN FRESHLY CREATED APP
`cd react-docker-app && yarn start`



## DEFAULT README FOR CREATE REACT APP
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts
In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More
- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
