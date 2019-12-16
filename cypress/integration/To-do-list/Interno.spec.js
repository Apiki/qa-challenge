describe('Interno Apiki', () => {
    it('Acesso ao blog da Apiki', ()=> {
        cy.visit('/')
    })

	// Como eu não estava conseguindo desenvolver o código e o encontrei pronto na internet deixei ele como commentário
	// Fonte: https://github.com/Apiki/qa-challenge/pull/1/commits/e7cdada95eaaf0d3f50c0fd38324921873e1a442

	/*
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
	*/
}) 
