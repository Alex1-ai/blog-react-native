import React from 'react';
import { NavigationContainer, TouchableOpacity } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import EditScreen from './src/screens/EditScreen';
const Stack = createStackNavigator();

const App = () => {
  
  
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Blogs">
          <Stack.Screen
            name="Blogs"
            component={IndexScreen}
            options={{ title:"Blogs"}}
          
          />
          <Stack.Screen
            name="Blog Detail"
            component={ShowScreen}
            options={{ title: 'Blog Detail' }}
          />

          <Stack.Screen 
            name="Create Blog"
            component={CreateScreen}
            options={{title:"Create Blog"}}
          />
           <Stack.Screen 
            name="Edit Blog"
            component={EditScreen}
            options={{title:"Edit Blog"}}
          />
          {/* Other screens go here */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
