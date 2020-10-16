describe('editing specific movie', () => {
	it.only('testing movies', () => {
		cy.visit('/');
		// navigate to '/movies'
		cy.get('[data-cy="moviesColumn"]').click();
		// add movie
		cy.get('.addMoviesContainer').find('img').click();
		// fill inputs
		cy.get('form')
			.find('[name="nameOfMovie"]')
			.type('Twilight')
			.siblings('[name="director"]')
			.type('C Hardwicke')
			.siblings('[name="movieReview"]')
			.type('Better than the book')
			.parent()
			.submit();

		cy.get('.addMoviesContainer').find('img').click();
		// fill inputs
		cy.get('form')
			.find('[name="nameOfMovie"]')
			.type('Percy Jackson')
			.siblings('[name="director"]')
			.type('Thor Freudenthal')
			.siblings('[name="movieReview"]')
			.type('Nothing Like the Book :(')
			.parent()
			.submit();

		cy.get('.addMoviesContainer').find('img').click();
		// fill inputs
		cy.get('form')
			.find('[name="nameOfMovie"]')
			.type('Jurassic Park')
			.siblings('[name="director"]')
			.type('Steven Spielberg')
			.siblings('[name="movieReview"]')
			.type('Wow! Great Movie!')
			.parent()
			.submit();

		cy.task('checkMovie', 'cypress.json');
		// edit specific book
        cy.get('.listContainerM')
            .contains('Percy Jackson')
            .parents('.listContainerM')
            .find('a')
            .click();
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
			.click();
		// delete all movies
		cy.task('deleteMovies', 'cypress.json');
	});
});
