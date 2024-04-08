

function allUsers(){ // Função exibe todos os usuários
    
    return cy.api({
        method: 'GET',
        url: `users`,
        failOnStatusCode: false,
    })

}

export { allUsers}