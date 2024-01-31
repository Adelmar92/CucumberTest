const env_config = require('./env_config')
const axios = require('axios')

const context = {
  environment: '',
  sessionToken: '',
  baseUrl: ''
}

var environment = process.env.NODE_ENV || 'local'

function startEnviroment () {
  context.environment = environment
  context.baseUrl = env_config.getBaseUrl(environment)
}

async function newSession () {
  startEnviroment()
  context.sessionToken = await getSessionCookie()
}

async function getSessionCookie () {
  try {
    const response = await axios.get(context.baseUrl + 'ads', {
      withCredentials: true // This ensures cookies are sent with the request
    })

    const setCookieHeader = response.headers['set-cookie']
    const matches = /JSESSIONID=([^;]+)/.exec(setCookieHeader)

    if (matches && matches.length > 1) {
      return matches[1]
    }

    return ''
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

module.exports = {
  context,
  startEnviroment,
  newSession
}
