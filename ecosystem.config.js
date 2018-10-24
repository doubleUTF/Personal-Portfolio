module.exports = {
  apps : [{
    name: 'Personal Portfolio',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      // user : 'node',
      // host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'https://github.com/doubleUTF/personal-portfolio',
      path : 'https://www.davidlau.xyz',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
