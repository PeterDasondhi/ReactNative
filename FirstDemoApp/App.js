import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your name" />
        <Button title="Submit" onPress={() => Alert.alert('Button pressed')} />
      </View>
      <View>
        <Text>List of goals...</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
  },
});
