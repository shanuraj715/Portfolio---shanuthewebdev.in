module.exports = {
  apps : [{
    name: 'shanuthewebdev_portfolio',
    script: 'serve -s build',
    env: {
      NODE_ENV: 'production',
      PORT: 3010,
    },
  }],
};
