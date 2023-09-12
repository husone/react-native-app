import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import New from "./common_components/New";

export default function App() {
  return (
    <View style={styles.container}>
      <New />
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
