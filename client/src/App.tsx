import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./common/Store";
import {PageMain} from "./pages/PageMain";

function App() {
    return (
        <Provider store={store}>
            <PageMain/>
        </Provider>
    );
}

export default App;
