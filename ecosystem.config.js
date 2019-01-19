module.exports = {
  apps: [
    {
      name: 'weather-app',
      script: './src/index.js',
      instances: 'max',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
