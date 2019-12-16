describe('Menu Apiki', () => {
    it('Abrindo Menu', () => {
        cy.visit('/')
        //cy.get('[class="navigation-mobile-header"]').should('not.visible')
        //cy.get('button[class="btn-hamburger"]').click()
        //cy.get('[class="navigation-mobile-header"]').should('be.visible')
    })
	
	// Como eu não estava conseguindo desenvolver o código e o encontrei pronto na internet deixei ele como commentário
	// Fonte: https://github.com/Apiki/qa-challenge/pull/1/commits/e7cdada95eaaf0d3f50c0fd38324921873e1a442
	
	/*
    it('Possui itens', () =>{
        cy.get('#menu-menu-das-novas-categorias').get('li').should('exist')
    })
	*/
})
