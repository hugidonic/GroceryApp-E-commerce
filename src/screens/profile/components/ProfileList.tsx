import { StyleSheet } from 'react-native';
import React from 'react';
import Block from './../../../components/Block';
import ProfileListItem from './ProfileListItem';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackScreenProps } from '../../../routes/routeTypes';

type Props = {};

const ProfileList = (props: Props) => {
	const nav = useNavigation<ProfileStackScreenProps['navigation']>()

	const handle = () => {
		
	}
	
	// TODO: Make navigation
	return (
		<Block>
			<ProfileListItem
				title="Orders"
				iconType="Ionicons"
				iconName="ios-receipt-outline"
				func={() => nav.navigate("ProfileStack", {screen: "Orders"})}
			/>
			<ProfileListItem
				title="My Details"
				iconType="Ionicons"
				iconName="person-outline"
				func={() => nav.navigate("ProfileStack", {screen: "MyDetails"})}
			/>
			<ProfileListItem
				title="Delivery Address"
				iconType="SimpleLineIcons"
				iconName="location-pin"
				func={() => nav.navigate("ProfileStack", {screen: "DeliveryAddress"})}
			/>
			<ProfileListItem
				title="Payment Methods"
				iconType="Ionicons"
				iconName="ios-card-outline"
				func={() => nav.navigate("ProfileStack", {screen: "PaymentMethods"})}
			/>
			<ProfileListItem
				title="Promo Cards"
				iconType="Ionicons"
				iconName="md-gift-outline"
				func={() => nav.navigate("ProfileStack", {screen: "PromoCards"})}
			/>
			<ProfileListItem
				title="Notifications"
				iconType="Ionicons"
				iconName="notifications-outline"
				func={() => nav.navigate("ProfileStack", {screen: "Notifications"})}
			/>
			<ProfileListItem
				title="Help"
				iconType="SimpleLineIcons"
				iconName="question"
				func={() => nav.navigate("ProfileStack", {screen: "Help"})}
			/>
			<ProfileListItem
				title="About"
				iconType="SimpleLineIcons"
				iconName="exclamation"
				func={() => nav.navigate("ProfileStack", {screen: "About"})}
			/>
		</Block>
	);
};

export default ProfileList;

const styles = StyleSheet.create({});
