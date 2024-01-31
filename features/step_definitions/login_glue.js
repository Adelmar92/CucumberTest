const { Given, When, Then } = require('@cucumber/cucumber')
const http_client = require('../../common/client/http_client')
const FormData = require('form-data')
let response = {}

let index_uri = 'ads/index'

When('User logs in with credentials {string} and {string}', async function (
  username,
  password
) {
  const formData = new FormData()
  formData.append('__LOGIN__', 'Y')
  formData.append('__UID__', username)
  formData.append('__PWD__', password)
  formData.append('Wiz_Ok', 'Submit')

  try {
    response = await http_client.post(index_uri, formData)
  } catch (error) {
    response = error.response
  }
})

Then('User should be able to see the Branch page', async function () {
  const sanitizedResponseData = response.data
  const sanitizedExpectedBodyContent =
    '<title>Bendigo and Adelaide Bank Limited - AGENCY LOGIN</title>'
  if (!sanitizedResponseData.includes(sanitizedExpectedBodyContent)) {
    throw new Error(
      `Expected response body to be '${sanitizedExpectedBodyContent}', but got '${response.data}'`
    )
  }
})

Then('User should see an error message', async function () {
  const sanitizedResponseData = response.data
  const sanitizedExpectedBodyContent = 'Application Error - INVALID USER ID'
  if (!sanitizedResponseData.includes(sanitizedExpectedBodyContent)) {
    throw new Error(
      `Expected response body to be '${sanitizedExpectedBodyContent}', but got '${response.data}'`
    )
  }
})
