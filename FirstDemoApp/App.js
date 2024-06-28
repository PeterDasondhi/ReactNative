import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput } from 'react-native';

export default function App() {

  function goalInputHandler(enteredText) {
    console.log(enteredText);
  }

  function addGoalHandler() {
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter course Goal!" onChangeText={goalInputHandler} />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text >List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingEnd: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10,
  },
  textInput: {
    width: '70%',
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },

  goalsContainer: {
    flex: 4,
  },
});
