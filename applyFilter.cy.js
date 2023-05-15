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


describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/')
    cy.get('input[name = "username"]').type('Abed_Kharobi')
    cy.get('input[name = "password"]').type('U123123123')
    cy.get('select[name = "login_as"]').select('staff')
    cy.get('form[action = "/login/"] > button[type="submit"]').click()
    cy.get('.nav > .nav-item > .nav-link').click()
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click()
    cy.get('input[id="not_observed"]').uncheck({ force: true });
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()
    cy.get(':nth-child(1) > .custom-control-label > h5').click()
    cy.get(':nth-child(5) > .btn').click()
  })

  

  it('select one goal and one group and change the mark', () => {
    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()
    cy.get(':nth-child(1) > .custom-control-label > h5').click()
    cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_66"]').check({ force: true })
    cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_teamb"][group="team b"]').check({ force: true })
    cy.get('button[type="button"][class="btn btn-primary mt-2 w-100"][onclick="applyGoalFilters(this)"]').click()
    cy.wait(700)
    cy.get('span[class="spinner-border spinner-border-sm"][style="display: none;"]').should('exist')
    cy.get('select[name="grade"][maxlength="255"][class="textinput textInput form-control"][style="width: 8rem;"][onchange="gradeMe(61902, this.value)"]').select('1', { force: true })
    cy.get(':nth-child(5) > .btn').click()
    cy.get('span[class="spinner-border spinner-border-sm"][style="display: none;"]').should('exist')
    
  })

  it('Try to observe the goal through select all goals and change the mark', () => {
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('2', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)')
    
  })

   it('Try to observe the goal through select one topic goals and change the mark', () => {

    cy.get(':nth-child(1) > .custom-control-label > h5').click()
    cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_66"]').check({ force: true })
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('3', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)').should('exist')
  })


  

  it('Try to observe the goal through select one topic with multiple topics and change the mark', () => {

    cy.get(':nth-child(1) > .custom-control-label > h5').click()
    cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_66"]').check({ force: true })
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeMe(61895, this.value)"]').select('4', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)').should('exist')
  })
   

  


  it('Try to observe the group through select one topic group and change the mark', () => {

    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()
    cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_teamb"][group="team b"]').check({ force: true })
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('4', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)').should('exist')
  })




  
  it('are we have all grades ?', () => {
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][onchange="gradeAllSelected(this)"]').should('exist')
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][onchange="gradeAllSelected(this)"]').find('option').should(($option)=>{
      expect($option.eq(0)).to.have.text("Grade")
      expect($option.eq(1)).to.have.text('\n                                        Not graded\n                                    ')
      expect($option.eq(2)).to.have.text('\n                                                1\n                                            ')
      expect($option.eq(3)).to.have.text('\n                                                2\n                                            ')
      expect($option.eq(4)).to.have.text('\n                                                3\n                                            ')
      expect($option.eq(5)).to.have.text('\n                                                4\n                                            ')
      expect($option.eq(6)).to.have.text('\n                                                5\n                                            ')
      expect($option.eq(7)).to.have.text('\n                                                6\n                                            ')
      expect($option.eq(8)).to.have.text('\n                                                7\n                                            ')
      expect($option.eq(9)).to.have.text('\n                                                8\n                                            ')
      expect($option.eq(10)).to.have.text('\n                                                9\n                                            ')
      expect($option.eq(11)).to.have.text('\n                                                10\n                                            ')
    });
  

  })

  it('lenght of grade list', () => {
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][onchange="gradeAllSelected(this)"]').should('exist')
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][onchange="gradeAllSelected(this)"]').find('option').should(($option)=>{
      expect($option).to.have.length(12);
    });
  })

  
})



