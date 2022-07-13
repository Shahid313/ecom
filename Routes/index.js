import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Collections from '../screens/Collections';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import EIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
//Badge
import IconBadge from 'react-native-icon-badge';

const Tab = createBottomTabNavigator();

const Routes = () => {
    const [badgeCount, setBadgeCount] = useState(3);
    return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor:'#55544A',
        },
      }}
      >
        <Tab.Screen 
         name="Home" component={Home} 
         options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <EIcon name='home' color="#B2EE32" size={size} />:
            <EIcon name='home' color='#D2D2D3' size={size} />,
            tabBarShowLabel: false,
            headerTitle:"Top sales",
            headerTitleAlign:'center',
            headerTitleStyle:{fontWeight:'bold', color:'white'},
            headerStyle:{
                backgroundColor:'#0C0B0c'
            },

            headerRight:() => (
            <View style={{marginRight:25}}>
            <IconBadge
                MainElement={
                    <EIcon name='shopping-cart' size={20} color='#FFFFFF'/>
                }
                BadgeElement={
                    <Text style={{color:'white'}}>{badgeCount}</Text>
                }
                IconBadgeStyle={
                    {width:20,
                    height:20,
                    backgroundColor: '#B2EE32',
                    position:'absolute',
                    left:10,
                    bottom:10
                    }
                  }
                Hidden={badgeCount==0}


            />
            
            </View>
            ),
        }}
         />
        <Tab.Screen 
        options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <MAIcon name='dashboard' color="#B2EE32" size={size} />:
            <MAIcon name='dashboard' color='#D2D2D3' size={size} />,
            tabBarShowLabel: false,
        }}
         name="Collections" component={Collections} />
        <Tab.Screen 
        options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <FAIcon name='search' color="#B2EE32" size={size} />:
            <FAIcon name='search' color='#D2D2D3' size={size} />,
            tabBarShowLabel: false,
        }} name="Search" component={Search} />
        <Tab.Screen 
        options={{
            tabBarIcon: ({size, color, focused}) => 
            focused ? 
            <EIcon name='shopping-cart' color="#B2EE32" size={size} />:
            <EIcon name='shopping-cart' color='#D2D2D3' size={size} />,
            tabBarShowLabel: false,
        }} name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default Routes;