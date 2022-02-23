import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp, NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
import { GroupI, GroupNamesType, ItemI } from '../redux/reduxTypes';


declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamListType {}
  }
}

// Param list for AppNavigator stacks

export type MainStackParamListType = {
  TabsStack: NavigatorScreenParams<TabsStackParamListType>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamListType>;
  Item: {item: ItemI}

  // PLOP SCREENS FOR Main
  Group: {group: GroupNamesType};
}

export type TabsStackParamListType = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;

  // PLOP SCREENS FOR Tabs
}

export type ProfileStackParamListType = {
  Orders: undefined;
  MyDetails: undefined;
  DeliveryAddress: undefined;
  PaymentMethods: undefined;
  PromoCards: undefined;
  Notifications: undefined;
  Help: undefined;
  About: undefined;

  // PLOP SCREENS FOR Profile
  
}

// Screen navigation props
export type ProfileStackScreenProps = NativeStackScreenProps<
  MainStackParamListType,
  "ProfileStack"
>
export type TabsStackScreenProps = NativeStackScreenProps<
  MainStackParamListType,
  "TabsStack"
>
export type ItemScreenProps = NativeStackScreenProps<
  MainStackParamListType,
  "Item"
>



// Screen options for stacks
export type screenOptionsType = BottomTabNavigationOptions | ((props: {
  route: RouteProp<TabsStackParamListType, keyof TabsStackParamListType>;
  navigation: any;
}) => BottomTabNavigationOptions) | undefined

export type ItemScreenOptionsType = NativeStackNavigationOptions | ((props: {
  route: RouteProp<MainStackParamListType, "Item">;
  navigation: any;
}) => NativeStackNavigationOptions) | undefined