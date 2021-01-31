import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from "react-native";
import Navigator from "./src/navigation";
import {Provider} from "react-redux";
import store from "./src/redux";

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle="default"/>
            <Navigator/>
        </Provider>
    );
};

export default App;
