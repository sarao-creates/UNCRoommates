import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignupComponent from './Signup';
import SigninComponent from './Signin'
import HomeComponent from './Home';
import RoommateComponent from './RoommateGroup';

const SignupPath = '/signup';
const SigninPath = '/signin';
const HomePath = '/home';
const RoommatePath = '/group';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/signup' />
      </Route>

      <Route path={SignupPath} component={SignupComponent}></Route>
      <Route path={SigninPath} component={SigninComponent}></Route>
      <Route path={HomePath} component={HomeComponent}></Route> 
      <Route path={RoommatePath} component={RoommateComponent}></Route>
    </Router>
  );
}

export default App;
