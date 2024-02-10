module.exports = {
  apps : [{
    script: 'serve -s build',
    env: {
      NODE_ENV: 'production',
      PORT: 3008,
    },
  }],
};
