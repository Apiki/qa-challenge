describe('Cypress Apiki - Menu', () => {
    it('Abrindo Menu', () => {
        cy.visit('/')
        cy.get('[class="navigation-mobile-header"]').should('not.visible')
        cy.get('button[class="btn-hamburger"]').click()
        cy.get('[class="navigation-mobile-header"]').should('be.visible')
    })
    it('Possui itens', () =>{
        cy.get('#menu-menu-das-novas-categorias').get('li').should('exist')
    })
})