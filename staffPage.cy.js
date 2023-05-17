describe('staff page', () => {
    beforeEach(() => {
        cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
        cy.get('input[name = "username"]').type('Hala_Assi')
        cy.get('input[name = "password"]').type('U123123123')
        cy.get('select[name = "login_as"]').select('staff')
        cy.get('form[action = "/login/"] > button[type="submit"]').click()
        cy.get('.nav > .nav-item > .nav-link').click();
        cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
    });
    // it('Add Staff', () => {
    //     cy.get('input[type="text"][class="textinput textInput form-control"][id="new_staff"][list="all_users"]').type('Marwa')
    //     cy.get('button[type="button"][class="btn btn-primary"][onclick="addStaff()"]').click();
    // });
    //make a search by name staff
    it('make a search by name staff', () => {
        cy.get('input[type="search"][class="form-control form-control-sm"]').type('Marwa')

    });
//the staff not exist
it('make a search by name staff is not exist', () => {
    cy.get('input[type="search"][class="form-control form-control-sm"]').type('amr')

});
  });
