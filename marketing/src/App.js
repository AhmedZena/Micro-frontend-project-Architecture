import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Landing from "./components/Landing"
import Pricing from "./components/Pricing";
import { StylesProvider , createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: "ma"
})          




export default () =>{
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/pricing" component={Pricing}/>
                </Switch>
            </StylesProvider>
        </BrowserRouter>
    )
}