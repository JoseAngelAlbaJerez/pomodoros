import React from 'react';
import {View} from 'react-native';
import Timer from "../../atoms/timer";
import Button from "../../atoms/button";

interface CounterProps{
    time: any;
    handleStartStop: () => void 
    isActive: boolean;
}

const Counter: React.FC<CounterProps> = ({time, handleStartStop, isActive}) => {
    return (
        <View>
            <Timer time={time} />
             <Button isActive={isActive} onPress={handleStartStop} />
        </View>
    );
}

export default Counter;