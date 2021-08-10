import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./common/Store";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {ROUTES} from "./routes";
import Layout from "./components/Layout";

function App() {
    return (
        <Switch>
            {/*<Suspense fallback={}> расскоментить если захочу грузить асинхронно*/}
            {ROUTES.map(({ component: Component, path, id, withLayout }) => {
                return withLayout ? (
                    <Route
                        key={id}
                        path={path}
                        exact
                        render={() => (
                            <Layout>
                                <Component />
                            </Layout>
                        )}
                    />
                ) : (
                    <Route key={id} path={path} exact component={Component} />
                );
            })}
            {/*</Suspense>*/}
        </Switch>
    );
}

export default App;
