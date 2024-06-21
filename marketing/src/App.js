import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing"
import Pricing from "./components/Pricing";

export default () =>{
    return (
        <BrowserRouter>
            <StylesProvider>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/pricing" component={Pricing}/>
                </Switch>
            </StylesProvider>
        </BrowserRouter>
    )
}