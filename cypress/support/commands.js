const Ajv = require("ajv")
const ajv = new Ajv({ allErrors: true, verbose: true }) // options can be passed, e.g. {allErrors: true}

Cypress.Commands.add('validateSchema', (path, response) => {
    cy.fixture(path).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(response.body)
        if (!valid)
            throw new Error(`Campo: ${validate.errors[0].instancePath} | Messagem: ${validate.errors[0].message}`)
    })
})