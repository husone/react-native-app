import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import New from "./common_components/New";
import ComponentIOS from "./common_components/ComponentIOS";
import ComponentAndroid from "./common_components/ComponentAndroid";


export default function App() {
  return (
    <View style={styles.container}>
      {
        Platform.select({
          ios: () => <ComponentIOS />,
          android: () => <ComponentAndroid />,
          default: () => <New />
        })()
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'red',
      },
    }),
  },
});
