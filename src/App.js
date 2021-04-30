import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Signup from './Signup';
import SignupComponent from './Signup';

const SignupPath = '/signup';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/signup' />
      </Route>

      <Route path={SignupPath} component={SignupComponent}></Route> 
    </Router>
  );
}

export default App;
