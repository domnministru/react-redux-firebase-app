import "./index.css";
import App from "./App";
import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import fbConfig from "./config/fbConfig";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducers/rootReducer";
import {createStore, applyMiddleware, compose} from "redux";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: "users", attachAuthIsReady: true})
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>,
        document.getElementById("root"));
    serviceWorker.unregister();
});


