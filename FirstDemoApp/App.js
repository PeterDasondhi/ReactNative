import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {

  const showAlert = () => {
    Alert.alert("Hii Abhay", "Good to go with react native.");
  };

  return (
    <View style={styles.container}>
      <Button title="Click here" onPress={showAlert}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
