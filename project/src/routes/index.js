import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home'
import Register from '../pages/Register';
import LogIn from '../pages/LogIn';
import Cart from '../pages/Cart';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LogIn} options={{
                        title: 'Login Screen',
                        headerShown: false
                    }}
                />
                <Stack.Screen name='Register' component={Register} options={{
                        title: 'Register Screen',
                        headerShown: false
                    }}
                />
                <Stack.Screen name='Home' component={Home} options={{
                        title: 'Initial Screen',
                        headerShown: false
                    }}
                />
                <Stack.Screen name='Cart' component={Cart} options={{
                        title: 'Back to Store',
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}