import AutorizationPage from '../support/AutorizationPage'
import user from '../fixtures/user.json'


  it('Autorization', {retries: 2},  () => {
    AutorizationPage.visit()
    AutorizationPage.SubmitLoginform(user.email, user.password)
  })

 
