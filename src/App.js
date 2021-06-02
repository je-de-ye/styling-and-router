import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import About from './components/About';
import Contact from './components/Contact';
import Secret from './components/Secret';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import PrivateRoute from './components/PrivateRoute'

function App() {
 
  return (
    <>
      <Router>

        <Navbar />        

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/secret" component={Secret} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
