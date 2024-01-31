 Feature: Testing ADS Application

  Scenario Outline: Invalid Login
    When User logs in with credentials "<username>" and "<password>"
    Then User should see an error message

    Examples:
      | username | password |
      | invalidUsrName | invalidPass |

  Scenario Outline: Successful Login
    When User logs in with credentials "<username>" and "<password>"
    Then User should be able to see the Branch page

    Examples:
      | username | password |
      | admin | validPass |
