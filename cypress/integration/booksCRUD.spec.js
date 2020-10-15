
describe('books CRUD', () => {
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

});
