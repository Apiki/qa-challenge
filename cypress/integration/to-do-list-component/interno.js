describe('Cypress Apiki - Interno', () => {
    it('Acessando site', ()=> {
        cy.visit('/')
    })
    it('og:image', ()=> {
        cy.get('meta[property="og:image"]').should('exist')
    })
    it('og:description', () => {
        cy.get('meta[property="og:description"]').should('exist')
    })
    it('og:title', () => {
        cy.get('meta[property="og:title"]').should('exist')
    })
    it('og:url', () => {
        cy.get('meta[property="og:url"]').should('exist')
    })
})