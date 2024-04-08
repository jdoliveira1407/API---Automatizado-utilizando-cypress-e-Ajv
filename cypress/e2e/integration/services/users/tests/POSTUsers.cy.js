import * as POSTUsers from '../requests/POSTUsers.request';

describe('POST Users', () => {
    it('Adicionar um novo usuário', () => {
        POSTUsers.addUser().then((response) => {
            expect(response.status).to.equal(201) //Requisição POST para o endpoint fornecido e valida se o status da resposta é 201 (OK).
            cy.validateSchema('POSTuser-schema', response)

        })
    });

});
