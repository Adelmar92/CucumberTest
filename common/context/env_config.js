module.exports = {
  local: {
    baseUrl: 'http://localhost:9080/'
  }
}

function getBaseUrl (env) {
  // Check if the provided 'env' is a valid key in the exported configuration
  if (module.exports.hasOwnProperty(env)) {
    return module.exports[env].baseUrl
  } else {
    throw new Error(`Environment '${env}' not found in configuration.`)
  }
}

module.exports.getBaseUrl = getBaseUrl
