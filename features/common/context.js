const { BeforeAll } = require('@cucumber/cucumber')
const env_config = require('./env_config')
const axios = require('axios')

const context = {
  sessionToken: '',
  baseUrl: ''
}

var environment = process.env.NODE_ENV || 'local'

BeforeAll(async () => {
  context.baseUrl = env_config.getBaseUrl(environment)
  context.sessionToken = await getSessionCookie()
  printEnviroment()
})

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

function printEnviroment () {
  console.log('------------------- Context -------------------')
  console.log(`|  -Enviroment = ${environment}                `)
  console.log(`|  -BaseUrl = ${context.baseUrl}               `)
  console.log(`|  -SessionToken = ${context.sessionToken}     `)
  console.log('-----------------------------------------------')
}

module.exports = context
