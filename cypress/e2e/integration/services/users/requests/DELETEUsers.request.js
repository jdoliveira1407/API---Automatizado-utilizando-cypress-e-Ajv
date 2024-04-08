function deleteUser (idUser){
    return cy.api({
        method: 'DELETE',
        url:`Users/${idUser}`,
        failOnStatuscode: false
    }

    )
}

export {deleteUser}