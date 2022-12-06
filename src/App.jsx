import './App.css';
import { Switch, Route } from 'wouter';

//pages
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
    );
}

export default App;
