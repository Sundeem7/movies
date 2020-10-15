
describe('movies CRUD', () => {

    it('testing movies', () => {
		cy.visit('/');
        // navigate to '/movies'
		cy.get('[data-cy="moviesColumn"]')
            // .find('img')
		    .click();
        // add movie
        cy.get('.addMoviesContainer')
            .find('img')
            .click()
        // fill inputs
        cy.get('form')
            .find('[name="nameOfMovie"]')
            .type('Twilight')
            .siblings('[name="director"]')
            .type('C Hardwicke')
            .siblings('[name="movieReview"]')
            .type('Better than the book')
            .parent()
            .submit()
        cy.task('checkMovie', 'cypress.json')
        // edit movie
        cy.get('.buttondiv')
            .find('a')
            .click()
        // clear inputs and edit movie
        cy.get('form')
            .find('[name="nameOfMovie"]')
            .clear()
            .type('Harry Potter')
            .siblings('[name="director"]')
            .clear()
            .type('too many to name')
            .siblings('[name="movieReview"]')
            .clear()
            .type('Books were better')
            .siblings('.otherEditButton')
            .click()
        // edit movie to delete
        cy.get('.buttondiv')
            .find('a')
            .click()
        // delete movie
        cy.get('.deleteButton')
            .click()
    });

});
