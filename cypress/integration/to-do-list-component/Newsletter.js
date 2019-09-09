describe('Cypress Apiki - Newsletter', () => {
    it('Campos obrigatórios', () => {
        cy.visit('/')
        cy.get('#newsletter').should('exist').get('[aria-required=true]').should('exist')
    })
    it('E-mail inválido', () => {
        cy.visit('/')
        cy.get('#input_5_2_3').click({force: true})
        cy.get('#input_5_2_3').type('Carlos Deodoro', {force: true})
        cy.get('input[name="input_1"]').type('carlinhosdeodoro1gmail.com', {force: true})
        cy.get('#gform_submit_button_5').click({force: true})
        cy.contains('Por favor, entrar um email válido.').should('exist')
    })
    it('Mensagem de sucesso', () => {
        cy.visit('/')
        cy.get('#input_5_2_3').type('Carlos Deodoro', {force: true})
        cy.get('input[name="input_1"]').type('carlinhosdeodoro@gmail.com', {force: true})
        cy.get('#gform_submit_button_5').click({force: true})
        cy.get('#gform_confirmation_message_5').should('exist')
    })
})