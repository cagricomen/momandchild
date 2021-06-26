import React from 'react';
import { Login, Recipe , Category, CategoryScreen12, CategoryScreen8, CategoryScreen6} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
                <Stack.Screen 
                    name="Category"
                    component={Category}
                />
                <Stack.Screen 
                    name="CategoryScreen12"
                    component={CategoryScreen12}
                />
                <Stack.Screen 
                    name="CategoryScreen8"
                    component={CategoryScreen8}
                />
                <Stack.Screen 
                    name="CategoryScreen6"
                    component={CategoryScreen6}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;