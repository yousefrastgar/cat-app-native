import React from "react";
import {View, ActivityIndicator} from "react-native";
import {styles} from "../assets/Styles";

const Loading = () => {
    return (
        <View style={[styles.flex1, styles.justifyContentCenter, styles.alignItemsCenter, styles.my3]}>
            <ActivityIndicator size="large" color="#d35400"/>
        </View>
    );
}

export default Loading;
