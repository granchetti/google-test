Feature: Google search
  As a user
  I want to search for the word apple
  So that I can find information about Apple products

  Scenario Outline:
    Given I am on Google page
    When I search for the word <word>
    Then I check if the results number is <comparison> than <number>

    Examples:
      | word  | comparison | number |
      | apple | more       | 100000 |
      | apple | less       | 10000  |
