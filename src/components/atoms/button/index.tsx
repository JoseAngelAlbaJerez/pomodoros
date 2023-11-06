import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  isActive: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>
        {isActive ? 'STOP' : 'START'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
});

export default Button;
