import Login from './components/Login/Login';
import { ApplicationContext, ApplicationProvider } from './contexts/ApplicationContext.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import List from './components/List/List.js';
 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </ApplicationProvider>
  );
}

function Routes() {
  const { authUser } = useContext(ApplicationContext);

  return (
    <Stack.Navigator>

      {authUser && <Stack.Screen
        options={{
          animation: 'slide_from_left',
        }}
        name="Login"
        component={Login} />}

      {!authUser && <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name="List"
        component={List} />}

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#242424'
  },
});

