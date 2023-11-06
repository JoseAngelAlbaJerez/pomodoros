import React from "react";
import {Text, View, Stylesheet} from 'react-native';

interface TitleProps{
    text: string;
}

const Title: React.FC<TitleProps> = ({text }) => {
    return <Text style={styles.text}>{text}</Text>;
}

const styles = Stylesheet.create({
    text:{
        fontSize: 32,
        fontWeight: "bold",
    }
});
export default Title 