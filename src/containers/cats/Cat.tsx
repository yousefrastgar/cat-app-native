import React, {useState} from "react";
import {Image} from "react-native";
import CatModel from "./CatModel";
import {styles} from "../../assets/Styles";

const Cat = ({cat}: { cat: CatModel }) => {
    const [showDefault, setShowDefault] = useState(true);
    const [error, setError] = useState(false);

    const image = showDefault ? require("../../assets/images/load.png") : (error ? require("../../assets/images/error.png") : {uri: cat.url});

    return (
        <Image
            source={image}
            style={styles.square}
            resizeMode="contain"
            onLoadEnd={() => setShowDefault(false)}
            onError={() => setError(true)}
        />
    );
}

export default Cat;
