const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let response;
let nameToTest;

Given('I have the name {string}', function (name) {
    nameToTest = name;
});

When('I request the gender prediction', async function () {
    response = await axios.get(`https://api.genderize.io/?name=${nameToTest}`);
});

Then('I should receive a response with gender {string}', function (expectedGender) {
    assert.equal(response.data.gender, expectedGender);
});
