const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        reporter: "mochawesome",
        reporterOptions: {
            charts: true,
            html: false,
            json: true,
            overwrite: false,
            reportDir: "cypress/reports"
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

    },
});
