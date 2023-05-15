# TestAutomation

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
