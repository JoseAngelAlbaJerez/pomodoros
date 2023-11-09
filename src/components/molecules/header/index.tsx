import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Title from '../../atoms/title';

const options = ["Pomodoro", "Short Break", "Long Break"];

interface HeaderProps {
  time?: number;
  setCurrentTime: (index: number) => void;
  setTime: (newTime: number) => void;
  currentTime: any;
}

const Header: React.FC<HeaderProps> = ({ currentTime, setCurrentTime, setTime})  => {
 
  function handlePress(index){
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  
  return (
    <View>
          <View>
        <Title text={"Pomodoro"} />
      </View>

    <View style= {{flexDirection: "row"}}>
   
      {options.map((item, index) => (
        <TouchableOpacity 
        key={index} 
        onPress={() => handlePress(index)}
        style={[styles.itemStyle, currentTime !==index && {borderColor: "transparent"}]}>

          <Text style={{fontWeight: "bold"}}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle:{
    
    borderWidth: 3,
    alignItems: 'center',
    padding: 5,
    width: "33%",
    borderColor: "white",
    marginVertical: 20,
    borderRadius: 10,
 
},

});

export default Header;