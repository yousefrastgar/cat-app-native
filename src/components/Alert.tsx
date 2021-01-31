import React from "react";
import {Text, View} from "react-native";
import {styles} from "../assets/Styles";

const Alert = ({text}: { text: string }) => {
    return (
        <View style={[styles.my3, styles.row]}>
            <Text style={[styles.fontFamily, styles.fontSize18, styles.darkOrangeBg, styles.whiteText, styles.p3]}>
                {text}
            </Text>
        </View>
    );
}

export default Alert;
