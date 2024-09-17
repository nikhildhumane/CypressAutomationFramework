export class LoginPage{

    weblocators={
        or_UserName:'input[placeholder="Username"]',
        or_Password:' input[placeholder="Password"]',
        or_login:' button[type="submit"]'
    }

   OpenURL()
   {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   }
   
   Enter_UserName(userName)
   {
      cy.get(this.weblocators.or_UserName).type(userName);
   }

   Enter_Password(Upass)
   {
    cy.get(this.weblocators.or_Password).type(Upass);
   }

   Click_Login()
   {
    cy.get(this.weblocators.or_login).click();
   }


}