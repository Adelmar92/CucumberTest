Feature: Gender Prediction API

  Scenario: Retrieve gender for a given name
    Given I have the name "<name>"
    When I request the gender prediction
    Then I should receive a response with gender "<gender>"

    Examples:
      | name   | gender |
      | Susan  | female |
      | John   | male   |
      | Megan  | female |
      | Pedro  | male   |