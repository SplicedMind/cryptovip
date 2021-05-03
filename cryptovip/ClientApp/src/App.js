import React from 'react';
import routes from "routes";
import { GlobalProvider } from "context/Provider";
import isAuthenticated from "utils/isAuthenticated";
import { Route, BrowserRouter as Router, Switch } from  "react-router-dom";
import { useHistory, useLocation } from 'react-router'; 


const RenderRoute = (route) =>{
   
    const history = useHistory();
    const {pathname} = useLocation();
    if(route.needsAuth && !isAuthenticated()){
        history.push('/login');
    }
    else if(pathname === '/dashboard/'){
        history.push('/dashboard')
    }
    return <Route path={route.path} exact render={(props) => <route.component {...props}/>}></Route>
}

export default function App (){

    return(
        <GlobalProvider>
            <Router>
                <Switch>
                    {routes.map((route, index) => {
                    return <RenderRoute {...route} key={index} />;
                    })}
                </Switch>
            </Router>
        </GlobalProvider> 
    );
}