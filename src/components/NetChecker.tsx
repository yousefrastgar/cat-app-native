import React, {useEffect, useState} from 'react';
import {View, Modal, StyleSheet, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {setNetState} from '../redux/actions/netActions';
import Icon from 'react-native-vector-icons/Feather';

const NetChecker = ({dispatch}: { dispatch: Function }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        NetInfo.addEventListener(state => {
            dispatch(setNetState(state.isConnected));
            if (!state.isConnected) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
        return () => {
            NetInfo.addEventListener(state => null);
        };
    }, []);

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Icon name="wifi-off" size={30} color="#d35400"/>
                    <Text style={styles.modalText}>Please connect to internet</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default connect(null)(NetChecker);
