import homePage from "../support/HomePage";
import AutorizationPage from "../support/AutorizationPage"
import user from "../fixtures/user.json"
import sessionData from "../fixtures/sessionData.json";


export function login(){
    homePage.visit();
    homePage.ClickLoginButton();

    AutorizationPage.SubmitLoginform(user.email, user.password);
}



export function loginViaApi(user) {
    let requestBody = { user: { email: " ", password: " "}};


requestBody.user.email = user.email;
requestBody.user.password = user.password;


cy.request('POST', '/api/users/login', requestBody).then(response => { 
    let token = response.body.user.token
     
    cy.setCookie('auth', token);


    sessionData.email = user.email;
    sessionData.username = user.username;
    sessionData.token = response.body.user.token;

    window.localStorage.setItem('user', JSON.stringify(sessionData));

    }) 
} 
    