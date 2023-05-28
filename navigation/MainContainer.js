import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppProvider } from '../context';


// páginas
import Inicio from './paginas/inicio';
import Contatos from './paginas/contatos';
import Lojas from './paginas/lojas';
import PIX from './paginas/pix';

const inicioNome = "Inicio";
const contatosNome = "Contatos";
const lojasNome = "Lojas";
const pixNome = "PIX";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PixStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pixNome}
        component={PIX} />
    </Stack.Navigator>
  );
}

function MainContainer() {
  return (
    <AppProvider>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={inicioNome}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let routeName = route.name;

              if (routeName === inicioNome) {
                iconName = focused ? 'swap-vertical' : 'swap-vertical';
              } else if (routeName === contatosNome) {
                iconName = focused ? 'people-outline' : 'people-outline';
              } else if (routeName === lojasNome) {
                iconName = focused ? 'cart-outline' : 'cart-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'purple',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: {
              padding: 10,
              height: 70,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
            showLabel: false,
          }}
        >
          <Tab.Screen name={inicioNome} component={Inicio} />
          <Tab.Screen name={contatosNome} component={Contatos} />
          <Tab.Screen name={lojasNome} component={Lojas} />
          <Tab.Screen name={pixNome} component={PixStack} options={{ tabBarButton: () => null }} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default MainContainer;
