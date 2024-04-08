

const payloadChangeUser = require('../payloads/change-user.json')
function newDataUser() {
    return {
        name: "Josimar",
        username: "josimar.qa",
        email: "joisimar@gmail.com",
        address: {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        }
    }
}

function changeUser(idUser) {
    return cy.api({
        method: 'PUT',
        url: `Users/${idUser}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: newDataUser()

    })

}

export { changeUser }