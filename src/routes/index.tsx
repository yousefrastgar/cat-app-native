import React, {lazy, Suspense} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div style={{marginTop: "15%"}}><Loading/></div>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
