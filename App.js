import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './components/Login/Login';
import { ApplicationProvider } from './contexts/ApplicationContext.jsx';

export default function App() {
  return (
    <ApplicationProvider>
      <View style={styles.container}>
        <Login />
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
