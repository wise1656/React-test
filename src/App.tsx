import React from 'react';
import './App.css';
import {SignUpForm} from "./components/SignUpForm";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SignInForm} from "./components/SignInForm";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <SignUpForm/>
                    </Route>
                    <Route path={'/signin'}>
                        <SignInForm/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
