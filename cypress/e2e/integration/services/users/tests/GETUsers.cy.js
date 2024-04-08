import * as GETUsers from '../requests/GETUsers.request'

const Ajv = require("ajv")
const ajv = new Ajv({ allErrors: true, verbose: true }) // options can be passed, e.g. {allErrors: true}


describe('GET Users', () => {
    it('Listar todos os usuários', () => {
        GETUsers.allUsers().then((response) => {
            const tamanho = response.body.length
            cy.log(`quantidade de usuários: ${tamanho}`)
            expect(response.status).to.equal(200) //Este exemplo faz uma requisição GET para o endpoint fornecido e valida se o status da resposta é 200 (OK)
            expect(response.status).to.not.be.null ////Este exemplo faz uma requisição GET para o endpoint fornecido e valida se o corpo não é nulo          
            cy.validateSchema('GETuser-schema', response)
        })
    });

});
