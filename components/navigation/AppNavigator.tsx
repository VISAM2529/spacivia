import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform } from 'react-native';
import HomeScreen from 'screens/HomeScreen';
import QuizScreen from 'screens/QuizScreen';
import GalleryScreen from 'screens/GalleryScreen';
import ProfileScreen from 'screens/ProfileScreen';
import ProjectScreen from 'screens/ProjectScreen';
import AIVisualizerScreen from 'screens/AIVisualizerScreen';
import CatalogScreen from 'screens/CatalogScreen';
import AppointmentScreen from 'screens/AppointmentScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom Tab Bar Label Component
const TabLabel = ({ focused, children }) => (
  <Text
    style={{
      fontSize: 11,
      fontWeight: focused ? '600' : '500',
      color: focused ? '#a87f5a' : '#9ca3af',
      marginTop: 2,
    }}
  >
    {children}
  </Text>
);

// Custom Tab Icon Component
const TabIcon = ({ focused, iconName, size = 22 }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: focused ? '#fef7f0' : 'transparent',
      marginBottom: 2,
    }}
  >
    <Ionicons
      name={iconName}
      size={size}
      color={focused ? '#a87f5a' : '#9ca3af'}
    />
  </View>
);

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let size = 22;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Design') {
            iconName = focused ? 'color-palette' : 'color-palette-outline';
          } else if (route.name === 'Gallery') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'folder' : 'folder-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <TabIcon focused={focused} iconName={iconName} size={size} />;
        },
        tabBarLabel: ({ focused, children }) => (
          <TabLabel focused={focused}>{children}</TabLabel>
        ),
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 68,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingHorizontal: 16,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f3f4f6',
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.06,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          paddingHorizontal: 4,
          marginHorizontal: 2,
        },
        tabBarActiveTintColor: '#a87f5a',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused}>Home</TabLabel>
          ),
        }}
      />
      <Tab.Screen 
        name="Design" 
        component={AIVisualizerScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused}>AI</TabLabel>
          ),
        }}
      />
      <Tab.Screen 
        name="Gallery" 
        component={GalleryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused}>Gallery</TabLabel>
          ),
        }}
      />
      <Tab.Screen 
        name="Projects" 
        component={ProjectScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused}>Projects</TabLabel>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused}>Profile</TabLabel>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false,
          cardStyle: { backgroundColor: '#ffffff' },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={MainTabs}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen}
          options={{
            presentation: 'modal',
            gestureDirection: 'vertical',
          }}
        />
        <Stack.Screen 
          name="Catalog" 
          component={CatalogScreen}
          options={{
            animationEnabled: true,
          }}
        />
        <Stack.Screen 
          name="Appointment" 
          component={AppointmentScreen}
          options={{
            presentation: 'modal',
            gestureDirection: 'vertical',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}