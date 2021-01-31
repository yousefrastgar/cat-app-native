import React from 'react';
import {View} from "react-native";
import NetChecker from "../components/NetChecker";
import {styles} from "../assets/Styles";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <View style={styles.flex1}>
            {children}
            <NetChecker/>
        </View>
    );
}

export default Layout;
