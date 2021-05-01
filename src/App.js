import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignupComponent from './Signup';
import SigninComponent from './Signin'

const SignupPath = '/signup';
const SigninPath = '/signin';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/signup' />
      </Route>

      <Route path={SignupPath} component={SignupComponent}></Route>
      <Route path={SigninPath} component={SigninComponent}></Route>
    </Router>
  );
}

export default App;
