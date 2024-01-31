const { BeforeAll } = require('@cucumber/cucumber')
const context = require('../../common/context/context')

BeforeAll(async () => {
  await context.newSession()
})
