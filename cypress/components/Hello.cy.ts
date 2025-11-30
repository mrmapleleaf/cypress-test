/// <reference types="cypress" />
import Hello from '../../app/components/Hello.vue'

describe('<Hello />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Hello)
  })
  it('mounts Hello component', () => {
    cy.mount(Hello)
    cy.get('h1').should('contain.text', 'Hello, Nuxt with TypeScript!')
  })
})