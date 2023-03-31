import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// paginas
import Inicio from './paginas/inicio';
import Contatos from './paginas/contatos';
import Lojas from './paginas/lojas';

const inicioNome = "Inicio";
const contatosNome = "Contatos";
const lojasNome = "Lojas";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
         <Tab.Navigator
          initialRouteName={inicioNome}
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === inicioNome) {
            iconName = focused ? 'swap-vertical' : 'swap-vertical';

          } else if (rn === contatosNome) {
            iconName = focused ? 'people-outline' : 'people-outline';

          } else if (rn === lojasNome) {
            iconName = focused ? 'cart-outline' : 'cart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70, backgroundColor: 'rgba(255, 255, 255, 0.5)'},
        showLabel: false
      }}
      >

      <Tab.Screen name={inicioNome} component={Inicio} />
      <Tab.Screen name={contatosNome} component={Contatos} />
      <Tab.Screen name={lojasNome} component={Lojas} />

    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;