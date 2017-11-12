import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { observer, Provider } from "mobx-react";
import { onSnapshot } from "mobx-state-tree";

import App from "Shared";
import store from 'Models';


const lastState = JSON.parse(localStorage.getItem('questions'));

if (lastState) store.updateQuestionList(lastState);

onSnapshot(store, (snapshot) => {
    localStorage.setItem('questions', JSON.stringify(snapshot.questions));
});

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);