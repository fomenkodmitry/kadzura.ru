import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {ROUTES} from "./routes";
import Layout from "./containers/Layout";

function App() {
    return (
        <Switch>
            {/*<Suspense fallback={}> расскоментить если захочу грузить асинхронно*/}
            {ROUTES.map(({ page: Component, path, id, withLayout }) => {
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
