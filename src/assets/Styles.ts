import {StyleSheet} from "react-native";
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveFontSize as rf
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    fontFamily: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        includeFontPadding: false
    },
    boldFontFamily: {
        fontFamily: 'RobotoBold',
        fontWeight: 'bold',
        includeFontPadding: false
    },
    darkOrangeBg: {
        backgroundColor: '#d35400'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    blackText: {
        color: '#000000'
    },
    flex1: {
        flex: 1
    },
    row: {
        flexDirection: "row"
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    mt4: {
        marginTop: rh(4)
    },
    mb1: {
        marginBottom: rh(1)
    },
    my3: {
        marginVertical: rh(3)
    },
    p3: {
        padding: rw(3)
    },
    py4: {
        paddingVertical: rw(4)
    },
    py8: {
        paddingVertical: rw(8)
    },
    pl2: {
        paddingLeft: rw(2)
    },
    pl6: {
        paddingLeft: rw(6)
    },
    square: {
        width: rw(100),
        height: rh(30),
        marginBottom: rh(2)
    },
    fontSize18: {
        fontSize: rf(1.8)
    },
    fontSize22: {
        fontSize: rf(2)
    }
});
