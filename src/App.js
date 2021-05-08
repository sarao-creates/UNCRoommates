import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignupComponent from './Signup';
import SigninComponent from './Signin'
import HomeComponent from './Home';
import DonateComponent from './Donate';
const SignupPath = '/signup';
const SigninPath = '/signin';
const HomePath = '/home';
const DonationPath = '/donate';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/signup' />
      </Route>

      <Route path={SignupPath} component={SignupComponent}></Route>
      <Route path={SigninPath} component={SigninComponent}></Route>
      <Route path={HomePath} component={HomeComponent}></Route> 
      <Route path={DonationPath} component={DonateComponent}></Route>
    </Router>
  );
}

export default App;
