# TestAutomation

### Test cases Detailed

| TestScenario | TestId | TestCaseTitle| Description|  Preconditions | TestCaseSteps | ExpectedResult | Actual | 
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | 
| Check observe in goals page as staff for topic not added by me    | TC1    | click on apply filters with no goals    | check apply filters button what give when there’s no topics selected    | no conditon    | click on apply filters   | message box to select a goal   | Message box Please select a goal    |
| Check observe in goals page as staff for topic not added by me    |TC2  |click on apply filters with one goal selected and no group   | check apply filters button what give when one topic selected    | select one topic    | 1. select one topic 2. click apply filter button    |message box to select a group filter    | Message box Please select a group filter   | 
| Check observe in goals page as staff for topic not added by me  | TC3 |click on apply filters with one goal selected and a group|  check apply filters button what give when one topic selected and group|  one topic and group filter selected |  1. select one topic 2. select a group filter 3. click apply filter button   | goals data appearing on page successfully    | no data appeared    |
| Check observe in goals page as staff for topic not added by me  | TC4 |click on apply filters with one goal selected and a all group|  check apply filters button what give when one topic selected and group|  one topic and group filter selected |  1. select one topic 2. select a group filter 3. click apply filter button   | goals data appearing on page successfully    | no data appeared    |
| Check observe in goals page as staff for topic not added by me| TC5    | click on apply filters with all goal selected and a group   |check apply filters button what give when all topic selected and group    | all topic and group filter selected    | 1. select all topic 2. select a group filter 3. click apply filter button   | goals data appearing on page successfully    | no data appeared    | 
| Check observe in goals page as staff for topic not added by me| TC6   | click on apply filters with all goal selected and  one group   |check apply filters button what give when all topic selected and group    | all topic and group filter selected    | 1. select all topic 2. select a one  group filter 3. click apply filter button   | goals data appearing on page successfully    | no data appeared    | 
| Check observe in goals page as staff for topic not added by me| TC7  | click on apply filters with all goal selected and  all group   |check apply filters button what give when all topic selected and group    | all topic and group filter selected    | 1. select all topic 2. select a all  group filter 3. click apply filter button   | goals data appearing on page successfully    | no data appeared    | 
| Check observe in goals page as staff for topic not added by me| TC8   | click on apply filters with all goal selected ,  all group and low level  |check apply filters button what give when all topic selected and group    | all topic and group filter selected    | 1. select all topic 2. select a all  group filter 3.select low level   4. click apply filter button   | goals data appearing on page successfully    | no data appeared    | 
| Check observe in goals page as staff for topic not added by me| TC9   | click on apply filters with all goal selected ,  all group and all levels  |check apply filters button what give when all topic selected and group    | all topic and group filter selected    | 1. select all topic 2. select a all  group filter 3.select all levels   4. click apply filter button   | goals data appearing on page successfully    | no data appeared    | 
| Check observe in goals page as staff for topic not added by me   | TC10 | verify observe button   |  check observe button what give| topic and group  selected  |   1. select topics 2. select group 3. click observe button  | observed topic data appeare     |no data appeared   | 
### Test script
#### Test script apply filters
```
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

```
- The cy.visit(https://goal-dev.mdx.ac.uk/accounts/login/?next=/) command opens the Dtale dashboard in the browser.
- The cy.get('input[name = "username"]').type('Hala_Assi') , cy.get('input[name = "password"]').type('U123123123'),
    cy.get('select[name = "login_as"]').select('staff')  commands find th username, password, and login as input fields and type in the          appropriate credentials.
- The cy.get('form[action = "/login/"] > button[type="submit"]').click() command finds the login button and clicks on it.
- The   cy.get('.mr-auto > :nth-child(2) > .nav-link').click(); commands find the "goals" from navbar.

```
it('Apply filters with no goals', function () {
 cy.get('.align-items-center > :nth-child(3) > .btn').click();
  });

```

- The cy.get('.align-items-center > :nth-child(3) > .btn').click(); command finds the "Apply filters" button and clicks on it.

```
it('Apply filters with one goal selected and no group', function () {
  cy.get('input[id="group_None"]').check({ force: true });
  cy.get('input[id="topic_66"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();
}); 

```
- The cy.get('input[id="group_None"]').check({ force: true });  command finds the "None" group input field and checks it.
- The cy.get('input[id="topic_66"]').check({ force: true });  command finds the "topic_66" goal input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.



```
it('Apply filters with one goal selected and  one  group', function () {
  cy.get('input[id="topic_66"]').check({ force: true });
  cy.get('input[id="group_teamb"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();
});

```
- The cy.get('input[id="topic_66"]').check({ force: true });  command finds the "topic_66" goal input field and checks it.
- The cy.get('input[id="group_teamb"]').check({ force: true });  command finds the "teamb" group input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.
```
it('Apply filters with one topics selected and all group', function () {
  
  cy.get('input[id="topic_66"]').check({ force: true });
  cy.get('input[name="all_groups"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();
});

```
- The cy.get('input[id="topic_66"]').check({ force: true });  command finds the "topic_66" goal input field and checks it.
- The cy.get('input[id="group_teamb"]').check({ force: true });  command finds the "teamb" group input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.

```

it('Apply filters with one topics selected and all group', function () {
  
  cy.get('input[id="topic_66"]').check({ force: true });
  cy.get('input[name="all_groups"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();
});

```
- The cy.get('input[id="topic_66"]').check({ force: true });  command finds the "topic_66" goal input field and checks it.
- The cy.get('input[name="all_groups"]').check({ force: true });  command finds the "all_groups" group input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.

```
it('Apply filters with all goal selected and one group', function () {
  
  cy.get('input[name="all_goals"]').check({ force: true });
  cy.get('input[id="group_teamb"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();

})

```
- The cy.get('input[id="all_goals"]').check({ force: true });  command finds the "all" goal input field and checks it.
- The cy.get('input[id="group_teamb"]').check({ force: true });  command finds the "teamb" group input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.**
 
 ```
it('Apply filters with all goal selected and all group', function () {

  cy.get('input[name="all_goals"]').check({ force: true });
  cy.get('input[name="all_groups"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();

});


```

- The cy.get('input[name="all_goals"]').check({ force: true });  command finds the "all" goal input field and checks it.
- The cy.get('input[name="all_groups"]').check({ force: true });  command finds the "all" group input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.

```
it('Apply filters button what give when all topic selected ,  one group and all level', function () {
  cy.get('input[name="all_goals"]').check({ force: true });
  cy.get('input[name="all_groups"]').check({ force: true });
  cy.get('input[name="all_levels"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();
});

```
- The cy.get('input[name="all_goals"]').check({ force: true });  command finds the "all" goal input field and checks it.
- The cy.get('input[name="all_groups"]').check({ force: true });  command finds the "all" group input field and checks it.
- The cy.get('input[name="all_levels"]').check({ force: true });  command finds the "all_levels" input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.
```
it('Apply filters button what give when all topic selected , group and low level', function () {
  cy.get('input[name="all_goals"]').check({ force: true });
  cy.get('input[name="all_groups"]').check({ force: true });
  cy.get('input[id="level_Low"]').check({ force: true });
  cy.get('.align-items-center > :nth-child(3) > .btn').click();
});

```
- The cy.get('input[name="all_goals"]').check({ force: true });  command finds the "all" goal input field and checks it.
- The cy.get('input[name="all_groups"]').check({ force: true });  command finds the "all" group input field and checks it.
- The cy.get('input[name="lowl_levels"]').check({ force: true });  command finds the "low_levels" input field and checks it
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.

```

it('Apply filters with all goal selected , one group and all leval ', function () {
cy.get('input[name="all_goals"]').check({ force: true });
cy.get('input[id="group_teamb"]').check({ force: true});
cy.get('input[name="all_levels"]').check({ force: true});
cy.get('.align-items-center > :nth-child(3) > .btn').click();
});

```


- The cy.get('input[name="all_goals"]').check({ force: true });  command finds the "all" goal input field and checks it.
- The cy.get('input[id="group_teamb"]').check({ force: true });  command finds the "teamb" group input field and checks it.
- The cy.get('input[name="all_levels"]').check({ force: true });  command finds the "all_levels" input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.

```

it('observe one groub for all topic', function () {
cy.get('input[id="topic_66"').check({ force: true });
cy.get('input[id="group_teamb"').check({ force: true });
cy.get('input[name="all_levels"]').check({ force: true});
 cy.get('.align-items-center > :nth-child(3) > .btn').click();
 cy.get(':nth-child(5) > .btn').click();
});
```
- The cy.get('input[id="topic_66""]').check({ force: true });  command finds the "topic_66" goal input field and checks it.
- The cy.get('input[id="group_teamb"]').check({ force: true });  command finds the "teamb" group input field and checks it.
- The cy.get('input[name="all_levels"]').check({ force: true });  command finds the "all_levels" input field and checks it.
- The cy.get('.align-items-center > :nth-child(3) > .btn').click();  command finds the "Apply filters" button and clicks on it.
####  Apply Filter video link 
[https://drive.google.com/file/d/1wq-OogWiqhMue56HNMAWA8P8-BePMS7W/view?usp=sharing]




### Test script
#### Test script grade list
```
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
});

```
- The cy.visit(https://goal-dev.mdx.ac.uk/accounts/login/?next=/) command opens the Dtale dashboard in the browser.
- The cy.get('input[name = "username"]').type('Abed_Kharobi')
    cy.get('input[name = "password"]').type('U123123123')
    cy.get('select[name = "login_as"]').select('staff')  commands find th username, password, and login as input fields and type in the          appropriate credentials.
- The cy.get('form[action = "/login/"] > button[type="submit"]').click() command finds the login button and clicks on it.
- The   cy.get('.mr-auto > :nth-child(2) > .nav-link').click(); commands find the "goals" from navbar.
- cy.get('input[id="not_observed"]').uncheck({ force: true }); un check not obseved
- cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click() click on all goals
- cy.get(':nth-child(1) > .custom-control-label > h5').click() click on all groups
- cy.get(':nth-child(5) > .btn').click() click on observe 

```
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

```

- cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click() click on all goals
- The cy.get(':nth-child(1) > .custom-control-label > h5').click() click on all groups
- cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_66"]').check({ force: true }) check the first goal
- cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_teamb"][group="team b"]').check({ force: true }) check group b
- cy.get('button[type="button"][class="btn btn-primary mt-2 w-100"][onclick="applyGoalFilters(this)"]').click() click apply filter
- cy.wait(700) wait 0.7 second
- cy.get('span[class="spinner-border spinner-border-sm"][style="display: none;"]').should('exist') to stop the prosses until end filter
- cy.get('select[name="grade"][maxlength="255"][class="textinput textInput form-control"][style="width: 8rem;"][onchange="gradeMe(61902, this.value)"]').select('1', { force: true }) select the grade 1 from grade list 
- cy.get(':nth-child(5) > .btn').click() click observe 


```
it('Try to observe the goal through select all goals and change the mark', () => {
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('2', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)')
    
  })

```
- The cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')  list of goals should be exist
- The cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('2', { force: true })  select 2 from grade
- The cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();  command finds the "Observe" button and clicks on it.
- cy.get('.list-group > .list-group-item > :nth-child(1)') dont finish until found the list of goals 



```
it('Try to observe the goal through select one topic goals and change the mark', () => {

    cy.get(':nth-child(1) > .custom-control-label > h5').click()
    cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_66"]').check({ force: true })
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('3', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)').should('exist')
  })


```
no new command /fillter by goals and select one mark to edit 
```
 it('Try to observe the goal through select one topic with multiple topics and change the mark', () => {

    cy.get(':nth-child(1) > .custom-control-label > h5').click()
    cy.get('input[type="checkbox"][class="custom-control-input topic_filter"][id="topic_66"]').check({ force: true })
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeMe(61895, this.value)"]').select('4', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)').should('exist')
  })

```
- no new command /observe the goal through select one topic with multiple topics to edit the mark

```

it('Try to observe the group through select one topic group and change the mark', () => {

    cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').click()
    cy.get('input[type="checkbox"][class="custom-control-input"][name="groups_filter"][id="group_teamb"][group="team b"]').check({ force: true })
    cy.get('div[class="row pt-2 m-0 border_bottom"]').should('exist')
    cy.get('select[name="grade"][onchange="gradeAllSelected(this)"]').select('4', { force: true })
    cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();
    cy.get('.list-group > .list-group-item > :nth-child(1)').should('exist')
  })


```
-  no new command /observe the group through select one topic group to edit the mark

```
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

```
- go to grade and confirmed all options
 
 ```
it('lenght of grade list', () => {
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][onchange="gradeAllSelected(this)"]').should('exist')
    cy.get('select[name="grade"][class="form-control mt-2 w-100 pr-0"][onchange="gradeAllSelected(this)"]').find('option').should(($option)=>{
      expect($option).to.have.length(12);
    });
  })




```

- confirm the length of list options is 12


####  Apply Filter video link 
[https://drive.google.com/file/d/1wq-OogWiqhMue56HNMAWA8P8-BePMS7W/view?usp=sharing]
