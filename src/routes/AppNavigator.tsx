// React and expo
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackHeaderProps
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Types
import {
	ProductScreenOptionsType,
	MainStackParamListType,
	ProfileStackParamListType,
	screenOptionsType,
	TabsStackParamListType
} from './routeTypes';

// Screens
import ProductScreen from '../screens/product/ProductScreen';
// Tabs stack
import HomeScreen from '../screens/home/HomeScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import CartScreen from '../screens/cart/CartScreen';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

// Profile stack
import OrdersScreen from './../screens/orders/OrdersScreen';
import MyDetailsScreen from './../screens/MyDetails/MyDetailsScreen';

// PLOP IMPORTS
import GroupScreen from '../screens/group/GroupScreen';

const MainStack = createNativeStackNavigator<MainStackParamListType>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamListType>();
const TabsStack = createBottomTabNavigator<TabsStackParamListType>();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				<MainStack.Screen name="TabsStack" component={BottomTabs} />
				<MainStack.Screen
					name="ProfileStack"
					component={ProfileStackScreens}
				/>
				<MainStack.Screen
					name="Product"
					options={ProductScreenOptions}
					component={ProductScreen}
				/>
				{/* // PLOP ADD SCREEN FOR Main */}
				<MainStack.Screen
					name="Group"
					options={{ headerShown: true }}
					component={GroupScreen}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const ProductScreenOptions: ProductScreenOptionsType = {
	headerShown: false
};

const ProfileStackScreens = () => {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="Orders" component={OrdersScreen} />
			<ProfileStack.Screen name="MyDetails" component={MyDetailsScreen} />
			<ProfileStack.Screen
				name="DeliveryAddress"
				component={MyDetailsScreen}
			/>
			<ProfileStack.Screen
				name="PaymentMethods"
				component={MyDetailsScreen}
			/>
			<ProfileStack.Screen
				name="PromoCards"
				component={MyDetailsScreen}
			/>
			<ProfileStack.Screen
				name="Notifications"
				component={MyDetailsScreen}
			/>
			<ProfileStack.Screen name="Help" component={MyDetailsScreen} />
			<ProfileStack.Screen name="About" component={MyDetailsScreen} />

			{/* // PLOP ADD SCREEN FOR Profile */}
		</ProfileStack.Navigator>
	);
};

const tabsScreenOptions: screenOptionsType = ({ route }) => ({
	headerShown: false,
	//TODO: Make tab bar look better
	tabBarStyle: {},
	tabBarIcon: ({ focused, color, size }) => {
		let IconName;
		switch (route.name) {
			case 'Home':
				IconName = focused ? 'md-home' : 'md-home-outline';
				break;
			case 'Explore':
				IconName = 'ios-search';
				break;
			case 'Home':
				IconName = focused ? 'md-home' : 'md-home-outline';
				break;
			case 'Cart':
				IconName = focused ? 'ios-cart' : 'ios-cart-outline';
				break;
			case 'Favorite':
				IconName = focused ? 'heart-sharp' : 'heart-outline';
				break;
			case 'Profile':
				IconName = focused ? 'ios-person' : 'person-outline';
				break;
			default:
				IconName = 'md-home';
		}
		// @ts-ignore
		return <Ionicons name={IconName} color={color} size={size} />;
	}
});

const BottomTabs = () => {
	return (
		<TabsStack.Navigator
			initialRouteName="Home"
			screenOptions={tabsScreenOptions}
		>
			<TabsStack.Screen name="Home" component={HomeScreen} />
			<TabsStack.Screen name="Explore" component={ExploreScreen} />
			<TabsStack.Screen name="Cart" component={CartScreen} />
			<TabsStack.Screen name="Favorite" component={FavoriteScreen} />
			<TabsStack.Screen name="Profile" component={ProfileScreen} />
			{/* // PLOP ADD SCREEN FOR Tabs */}
		</TabsStack.Navigator>
	);
};
