describe('Busca Apiki', () => {

	it('Acesso ao blog da Apiki', () => {
		cy.visit('/')
	})
	
	
	// Como eu não estava conseguindo desenvolver o código e o encontrei pronto na internet deixei ele como commentário
	//Fonte: https://github.com/Apiki/qa-challenge/pull/1/commits/e7cdada95eaaf0d3f50c0fd38324921873e1a442
	
	/*
    it('Abertura do campo de digitação', () =>{
        cy.get ('button[class="btn-search btn-icon"]').click()

    })
    it('Foram encontrados resultados', () =>{
        cy.get ('input[class="search-form-field"]').last().type('wordpress')
        cy.get ('button[class="search-form-btn"]').last().click()
        cy.get('picture[class="card__figure"]').should('exist')
        cy.get('li').contains('1')
    })
    it('Resultados com paginação', () => {
        cy.get('div[class="align-center page-numbers__wrp"]').should('exist')
        cy.get('li').contains('1').should('exist')
        cy.get('li').contains('2').should('exist')
    })
    it('Não foram encontrados resultados', () =>{
        cy.visit('/')
        cy.get ('button[class="btn-search btn-icon"]').click()
        cy.get ('input[class="search-form-field"]').last().type('cafezinho')
        cy.get ('button[class="search-form-btn"]').last().click()
        cy.contains('picture[class="card__figure"]').should('not.exist')
       })
    it('Resultados sem paginação', () => {
        cy.get('div[class="align-center page-numbers__wrp"]').should('exist')
        cy.get('li').contains('1').should('not.exist')
        cy.get('li').contains('2').should('not.exist')
    })
	*/
	
})
