const config = {
  development: {
    url: {
      baseUrl: 'http://localhost:4000/api/',
    }
  },
  production: {
    url: {
      baseUrl: 'http://localhost:4000/api/',
    }
  }
}

const get = env => {
  return config[process.env.NODE_ENV] || config.development;
}

export default get;