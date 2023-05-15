describe('Apply filters', () => {
    beforeEach(() => {
        cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
        cy.get('input[name = "username"]').type('Hala_Assi')
        cy.get('input[name = "password"]').type('U123123123')
        cy.get('select[name = "login_as"]').select('staff')
        cy.get('form[action = "/login/"] > button[type="submit"]').click()
        cy.get('.nav > .nav-item > .nav-link').click();
        cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    });
    it('Apply filters with no goals', function () {
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });

    it('Apply filters with one goal selected and no group', function () {
        cy.get('input[id="group_None"]').check({ force: true });
        cy.get('input[id="topic_66"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });

    it('Apply filters with one goal selected and  one  group', function () {
        //   cy.get('input[id="topic_66"]').check({ force: true });
        cy.get(':nth-child(3) > .custom-control-label > h5').click();
        cy.get('input[id="group_teamb"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    
    it('Apply filters with one topics selected and all group', function () {

        // cy.get('input[id="topic_66"]').check({ force: true });
        cy.get(':nth-child(3) > .custom-control-label > h5').click();

        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();

    });
    //5
    it('Apply filters with all goal selected and one group', function () {

        //cy.get('input["name="all_goals""]').check({ force: true });
        cy.get(':nth-child(1) > .custom-control-label > h5').click();
        cy.get('input[id="group_teamb"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();

    });
    //6
    it('Apply filters with all goal selected and all group', function () {

        //   cy.get('input[name="all_goals"]').check({ force: true });
        cy.get(':nth-child(1) > .custom-control-label > h5').click();

        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();

    });
    //7
    it('Apply filters button what give when all topic selected , group and low level', function () {


        //   cy.get('input[name="all_goals"]').check({ force: true });
        cy.get(':nth-child(1) > .custom-control-label > h5').click();

        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[id="level_Low"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    //8
    it('Apply filters button what give when all topic selected ,all group and all level', function () {
        //   cy.get('input[name="all_goals"]').check({ force: true });
        cy.get(':nth-child(1) > .custom-control-label > h5').click();

        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[name="all_levels"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    //9
    it('Apply filters with all goal selected , one group and all leval ', function () {
        //   cy.get('input[name="all_goals"]').check({ force: true });
        cy.get(':nth-child(1) > .custom-control-label > h5').click();

        cy.get('input[id="group_teamb"]').check({ force: true });
        cy.get('input[name="all_levels"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
    });
    //10
    it('observe one groub for all topic', function () {
        //   cy.get('input[id="topic_66"').check({ force: true });
        cy.get(':nth-child(3) > .custom-control-label > h5').click();

        cy.get('input[id="group_teamb"').check({ force: true });
        cy.get('input[name="all_levels"]').check({ force: true });
        cy.get('.align-items-center > :nth-child(3) > .btn').click();
        cy.get(':nth-child(5) > .btn').click();
    });

});