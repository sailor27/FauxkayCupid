# Setup Instructions
Steps to get your project up and running from scratch.


## Getting started

Firstly, install the package:

```bash
git init
mkdir src
mkdir src/components
touch .gitignore template.ejs  webpack.config.js src/index.jsx src/components/App.jsx
npm init
apm i react@0.16.2
```

### .gitignore
```
.DS_STORE
node_modules
build
 ```

### Webpack Dependencies
```bash
npm install webpack@3.4.0 webpack-dev-server@2.5.0 eslint eslint-plugin-react -g
npm install react@15.5.4 react-dom@15.5.4 prop-types@15.5.10 react-router-dom@4.0.0 --save
```

```bash
npm install webpack@3.4.0 babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 webpack-dev-server@2.5.0 react-hot-loader@3.0.0-beta.7 html-webpack-plugin@2.29.0 eslint-loader url-loader@0.6.2 file-loader@1.1.6 --save-dev
```

### CSS dependency
```bash
npm install --save styled-jsx
```
### Linter things
```bash
eslint --init
```
Then answer these questions in the terminal about your style:
  * Are you using ECMAScript 6 features? Yes
  * Are you using ES6 modules? Yes
  * Where will your code run? Browser
  * Do you use CommonJS? No
  * Do you use JSX? Yes
  * Do you use React? Yes
  * What style of indentation do you use? Spaces
  * What quotes do you use for strings? Single
  * What line endings do you use? Unix
  * Do you require semicolons? Yes
  * What format do you want your config file to be in? JSON

### .eslintrc.json
```json
{
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/no-multi-comp": 2,
    "react/jsx-indent-props": [
        "error",
        2
      ],
    "react/jsx-pascal-case": 2,
    "react/prop-types": 2,
    "react/jsx-indent": [
        "error",
        2
    ],
    "indent": [
        "error",
        2
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "always"
    ]
  }
}
```

#### TO ENABLE AND DISABLE LINTER
```
  /*eslint-disable */  
  <code here>  
  /*eslint-enable */   
```

### webpack.config.js
```
const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
        }
      },
      {
        test: /\.(png|gif|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel",
            "styled-jsx/babel"
          ]
        }
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'React Help Queue',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ]
};
```

### template.ejs
```
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
  <body>
    <% if (htmlWebpackPlugin.options.appMountId) { %>
      <div id="<%= htmlWebpackPlugin.options.appMountId%>"></div>
    <% } %>
  </body>
</html>
```

### package.json
```json
"scripts": {
  "lint": "eslint src/** src/**/**; exit 0",
  "lint-fix": "eslint src/** src/**/** --fix; exit 0",
  "test": "echo \"Error: no test specified\" && exit 1",
  "start":  "webpack-dev-server"
},
```

### index.jsx
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
```

### App.jsx ###
```
import React from "react";

function App() {
  return (
    <div>
      google
    </div>
  );
}

export default App;
```


### SERVE BUILD ERROR CHECK
```bash
$ webpack-dev-server
```
If you alter anything but a component (configuration files, entry points, HTML templates, etc.) you'll still have to restart the server for changes to take place.

```bash
$ npm run start
```
we should see Webpack runs the $ webpack-dev-server to both compile our project, and launches our development server.
It might not feel efficient to map one command to another command like this, but it's actually best practice. start is standard naming convention for scripts that launch a project. Since React is a library that can be combined with countless other tools, the command to start a React app isn't always the same. If a developer isn't using webpack-dev-server, their app will have a different command. But, by mapping whatever your launch command is to $ npm run start, any developer can use the same industry standard to launch your application. Pretty cool!

```bash
$ npm run lint
```
Check for syntax errors

```bash
$ npm run lint-fix
```
Fix syntax errors
