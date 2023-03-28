
import { Given, When, Then } from '@wdio/cucumber-framework'
import { GoogleFacts } from '../facts/GoogleFacts.js';
import { GoogleTasks } from '../tasks/GoogleTasks.js';
import { GoogleQuestions } from '../questions/GoogleQuestions.js';

const googleFacts = new GoogleFacts();
const googleTasks = new GoogleTasks();
const googleQuestions = new GoogleQuestions();

Given(/^I am on Google page$/, function () {

    googleFacts.openGoogle();

});


When(/^I search for the word (.*)$/, async function (word) {

    await googleTasks.searchFor(word);

});


Then(/^I check if the results number is (more|less) than (.*)$/, async function (comparison, number) { 
    
    await googleQuestions.verifyResults(comparison, number);

});