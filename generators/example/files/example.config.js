exports = module.exports = {
  default: {
    key: 'default value'
  },

  test: {
    key: 'test value',
    additionalKey: 'will not be there in default or other envs'
  },

  production: {
    // only in production environment will App.configuration.key be "other value"
    key: 'other value'
  }
};
