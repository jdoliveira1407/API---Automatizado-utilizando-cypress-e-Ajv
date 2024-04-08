import * as PUTUsers from '../requests/PUTUsers.request'
import * as GETUsers from '../requests/GETUsers.request'



describe('PUT Users', () => {
    it('Alterar Usuário', () => {
        GETUsers.allUsers().then((resAllUsers) => {
            PUTUsers.changeUser(resAllUsers.body[0].id).then((resChangeUser) => {
                expect(resChangeUser.status).to.equal(200);
                expect(resChangeUser.body).to.be.not.null;
                expect(resChangeUser.body.name).to.eq('Josimar');
                cy.validateSchema('PUTuser-schema', resChangeUser)
            })
        })

    });

})


