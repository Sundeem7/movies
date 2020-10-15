
describe('books, movies, and tvShows CRUD', () => {
	it('testing books', () => {
		cy.visit('/');
        // navigate to '/books'
		cy.get('.column1')
            .find('img')
		    .click();
        // add book
        cy.get('.addBooksContainer')
            .find('img')
            .click()
        // fill inputs
        cy.get('form')
            .find('[name="name"]')
            .type('Twilight')
            .siblings('[name="author"]')
            .type('S Collins')
            .siblings('[name="review"]')
            .type('It was insightful.')
            .parent()
            .submit()
        // edit book
        cy.get('.buttondiv')
            .find('a')
            .click()
        // clear inputs and edit book
        cy.get('form')
            .find('[name="name"]')
            .clear()
            .type('Harry Potter')
            .siblings('[name="author"]')
            .clear()
            .type('JK Rowling')
            .siblings('[name="review"]')
            .clear()
            .type('My actual favorite!')
            .siblings('.otherEditButton')
            .click()
        // edit book to delete
        cy.get('.buttondiv')
            .find('a')
            .click()
        // delete book
        cy.get('.deleteButton')
            .click()
	});

    it.only('testing movies', () => {
		cy.visit('/');
        // navigate to '/books'
		cy.get('[data-cy="moviesColumn"]')
            // .find('img')
		    .click();
        // add book
        cy.get('.addMoviesContainer')
            .find('img')
            .click()
        // delete all previous movies
        // cy.task('deleteMovies', 'cypress.json')
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
        // edit book
        cy.get('.buttondiv')
            .find('a')
            .click()
        // clear inputs and edit book
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
        // edit book to delete
        cy.get('.buttondiv')
            .find('a')
            .click()
        // delete book
        cy.get('.deleteButton')
            .click()
    });
    it('testing tvShows', () => {
		cy.visit('/');
        // navigate to '/books'
		cy.get('.column3')
            .find('img')
		    .click();
        // add book
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
        // edit book
        cy.get('.buttondiv')
            .find('a')
            .click()
        // clear inputs and edit book
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
        // edit book to delete
        cy.get('.buttondiv')
            .find('a')
            .click()
        // delete book
        cy.get('.deleteButton')
            .click()
        
	});
});
