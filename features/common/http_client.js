// Define a function to make a POST request
const axios = require('axios')
const context = require('./context')

const post = async (uri, formData) => {
  const requestHeaders = {
    'Content-Type':
      'multipart/form-data; boundary=<calculated when request is sent>'
  }
  if (context.sessionToken) {
    requestHeaders.Cookie = `JSESSIONID=${context.sessionToken}`
  }

  try {
    const response = await axios.post(context.baseUrl + uri, formData, {
      headers: requestHeaders
    })

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports.post = post
