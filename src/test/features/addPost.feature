Feature: Conduit login 

Scenario: Login and create a post
Given I am on the conduit login page
When I login with valid credentials
And I click on new post button
And I fill up the require fields
And I publish the article