# rooms-availability-cypress-tests
This is a cypress project to automate the end to end test of room occupancy functionality. The test verifies the number of occupied premium and economy rooms along with the amount earned by each category of rooms.

## Project Structure
- The end to end test "occupancy.cy.js" is included in cypress/e2e folder
- The test data is included as a json file "data.json" inside cypress/fixtures
- The html reports are saved in cypress/reports folder

## How to run the test
- Clone and checkout the git repository
- Open the project in a suitable IDE like Visual Studio Code.
- Open the terminal and provide the command "npm run test" to run the test ( the command to run the test is included in scripts inside package.json).

## Improvements
- Code Refactoring and scalability
- Tests are manually run using terminal.This can be automated using CI/CD pipeline
