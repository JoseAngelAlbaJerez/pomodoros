
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Counter from '../../molecules/counter';
import Header from '../../molecules/header';
import { Platform } from 'react-native';
import  { Audio } from 'expo-av'
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function Pomodoro() {
    const [isWorking, setIsWorking] = useState(false);
    const [time, setTime] = useState(25 * 60); 
    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
    const [isActive, setIsActive] = useState(false);
  


    useEffect(() => {
        let interval = null;
       
        if (isActive) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1);
        } else {
          clearInterval(interval);
        } 
      
        if (time === 0) {
        
          setIsActive(false);
        
          setIsWorking((prev) => !prev);
          setTime(isWorking ? 300 : 1500);
          
        }
      
        return () => clearInterval(interval);
      }, [isActive, time]);

  function handleStartStop() {
   
    playSound();
    setIsActive(!isActive);
    
    }

  async function playSound() {
   
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/click.wav")
    );
    await sound.playAsync();
  }
 

  return (
    
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === "android" && 30 }}>
            <Header
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            setTime={setTime}
            time={time} 
/>
<Counter time={time} handleStartStop={handleStartStop} isActive={isActive} />

      </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
