import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importando cada página
import Home from './screens/home/home'
import Categorias from './screens/categorias/categorias'
import Tarefas from './screens/tarefas/tarefas';

// Importando cada icone da Navigation bar
import { NavHome, NavHomeActive, NavCategoria, NavCategoriaActive, NavTarefa, NavTarefaActive } from '../assets/icones/navIcons'



const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        //  Configurar o a tabBar para todas as telas
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarShowLabel: false,
        headerShown: false,

        // Adicionando estilização na tabBar
        tabBarStyle:{
          position: 'absolute',
          backgroundColor: '#D1DFFE',
          borderTopWidth: 0,
          borderRadius: 10,
          height: '9%',
        }
      }}
    >
        <Tab.Screen 
        name='Bem vindo'
        component={Home} 
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return(
                <NavHomeActive color={color} size={size} />
              )}

            return(
              <NavHome color={color} size={size} />
            )
          }
        }}
        initialParams={{ tabName: 'Home' }}
        />
        
        <Tab.Screen 
        name='Categorias'
        component={Categorias} 
        options={{
          tabBarIcon: ({ color, size, focused  }) => {
            if (focused) {
              return(
                <NavCategoriaActive color={color} size={size} />
              )}

            return(
              <NavCategoria color={color} size={size} />
            )
          }
        }}
        />

        <Tab.Screen 
        name='Tarefas'
        component={Tarefas} 
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return(
                <NavTarefaActive color={color} size={size} />
              )}

            return(
              <NavTarefa color={color} size={size} />
            )
          }
        }}
        />

    </Tab.Navigator>
  )}