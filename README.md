This is the default configuration package of xerxes.

It selects the correct values depending on the currently active environment.

## Install

```
npm install --save xx-configuration
```

*Note* This is a core package of xerxes, so you usually don't have to install it

## Usage

Put your configuration files into your app's `configuration` directory. Configuration files must end with `.config.js`, otherwise they will be ignored.

For example you have the following in `app/configuration/database.config.js`

```
exports = module.exports = {
  default: {
    key: "value"
  },

  production: {
    key: "something else"
  }
};
```

Load the configurations in your app.js file

```
App.load("configuration/load");
```

Now `App.configuration.database.key` will be `something else` when `NODE_ENV` is `production`, and `value` in every other environment

## Generate example configuration file

```
xerxes generate configuration example
```

This will create a `configuration` folder in your app's directory if it not exists and put in an example configuration file.

## Tests

In order to run the tests, put `load.js` into `node_modules/xx-configuration`
