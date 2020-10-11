/// <reference types="cypress" />

describe('Testing All Routes', () => {
    it('testing home route', () => {
        cy.visit('/')
    })
    it('testing home route', () => {
        cy.visit('/books')
    })
    it('testing home route', () => {
        cy.visit('/movies')
    })
    it('testing home route', () => {
        cy.visit('/tvShows')
    })
})