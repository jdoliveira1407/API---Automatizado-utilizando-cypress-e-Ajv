

    const payloadAddUser = require('../payloads/add-user.json')

    function addUser(){
    return cy.api({
        method: 'POST',
        url: `users`,
        failOnStatusCode: false,
        body: payloadAddUser,
        headers: {'content-type' : 'application/json'}
    })
    }


export {addUser};