import React from 'react';
import {
  StyleSheet,
  View,
  TextInput as Input,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

type TextInputProps = {
  onSubmit: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
};

const TextInput: React.FC<TextInputProps> = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Type a todo, then hit enter!"
        placeholderTextColor="#f2f2f2"
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 12,
  },
  input: {
    color: '#fff',
    backgroundColor: '#506273',
    borderRadius: 4,
    padding: 8,
  },
});
