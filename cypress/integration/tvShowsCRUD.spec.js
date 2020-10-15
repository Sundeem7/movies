
describe('tvShows CRUD', () => {
	
    it('testing tvShows', () => {
		cy.visit('/');
        // navigate to '/tvShows'
		cy.get('.column3')
            .find('img')
		    .click();
        // add tvShow
        cy.get('.addTvShowsContainer')
            .find('img')
            .click()
        // fill inputs
        cy.get('form')
            .find('[name="nameOfTvShow"]')
            .type('The Office')
            .siblings('[name="network"]')
            .type('NBC')
            .siblings('[name="tvShowReview"]')
            .type('funny, but not PC')
            .parent()
            .submit()
        // edit tvShow
        cy.get('.buttondiv')
            .find('a')
            .click()
        // clear inputs and edit tvShow
        cy.get('form')
            .find('[name="nameOfTvShow"]')
            .clear()
            .type('Rick & Morty')
            .siblings('[name="network"]')
            .clear()
            .type('Adult Swim')
            .siblings('[name="tvShowReview"]')
            .clear()
            .type('love the adult humor')
            .siblings('.otherEditButton')
            .click()
        // edit tvShow to delete
        cy.get('.buttondiv')
            .find('a')
            .click()
        // delete tvShow
        cy.get('.deleteButton')
            .click()
        
	});
});
