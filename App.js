import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetProvider from './src/contexts/bottomSheetContext';

// Importando cada página
import { Home } from './src/screens/Home';
import { Categorias } from './src/screens/Categorias';
import { Tarefas } from './src/screens/Tarefas';
import { DetalhesCategorias } from './src/components/DetalhesCategorias';
import { BottomSheetCriar } from './src/components/BottomSheetCriar';
import { BottomSheetVer } from './src/components/BottomSheetVer';

// Importando cada ícone da Navigation bar
import { NavHome, NavHomeActive, NavCategoria, NavCategoriaActive, NavTarefa, NavTarefaActive } from './assets/icones/navIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
    >
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
}

function CategoriasStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CategoriasStack" component={Categorias} />
      <Stack.Screen name="CategoryDetails" component={DetalhesCategorias} />
    </Stack.Navigator>
  );
}

function TarefasStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TarefasStack" component={Tarefas} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#fff',
              tabBarInactiveTintColor: '#000',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle:{
                backgroundColor: '#D1DFFE',
                borderTopWidth: 0,
                borderRadius: 10,
                height: '9%',
              }
            }}
          >
            <Tab.Screen 
              name='Home'
              component={HomeStack} 
              options={{
                tabBarIcon: ({ color, size, focused }) => (
                  focused ? <NavHomeActive color={color} size={size} /> : <NavHome color={color} size={size} />
                )
              }}
            />
            
            <Tab.Screen 
              name='Categorias'
              component={CategoriasStack} 
              options={{
                tabBarIcon: ({ color, size, focused  }) => (
                  focused ? <NavCategoriaActive color={color} size={size} /> : <NavCategoria color={color} size={size} />
                )
              }}
            />

            <Tab.Screen 
              name='Tarefas'
              component={TarefasStack} 
              options={{
                tabBarIcon: ({ color, size, focused }) => (
                  focused ? <NavTarefaActive color={color} size={size} /> : <NavTarefa color={color} size={size} />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>

        <BottomSheetCriar />

        <BottomSheetVer />
      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
}
