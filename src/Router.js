import { Switch, Route } from "react-router-dom";
import Accounts from "./js/pages/Accounts"
import Home from "./js/pages/Home"
import Dashboard from "./js/pages/Dashboard"

export const Router = (props) => {
    
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/accounts">
                <Accounts />
            </Route>

        </Switch>
    );
}

export default Router;