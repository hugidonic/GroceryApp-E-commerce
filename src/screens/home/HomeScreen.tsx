//  Packages and types
import { KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { TabsStackScreenProps } from '../../routes/routeTypes';
// Utils
import data from './../../utils/data';
import colors from './../../utils/colors';
// Custom components
import Block from '../../components/Block';
import RText from '../../components/RText';
// Components
import SearchBar from './components/SearchBar';
import BgSlider from './components/BgSlider';
import GroupsList from './components/GroupsList';
import ProductList from './components/ProductList';

const HomeScreen = (props: TabsStackScreenProps) => {
	return (
		<ScrollView
			style={{ backgroundColor: colors.white }}
			showsVerticalScrollIndicator={false}
			keyboardDismissMode="interactive"
		>
			<KeyboardAvoidingView
				behavior="padding"
				style={{ paddingHorizontal: 20, paddingTop: 40 }}
			>
				<SearchBar />
				{/* TODO: Make this a slider fadeinout thing */}

				<BgSlider />

				<ProductList title="Fruits" data={data.fruits} />
				<ProductList title="Vegetables" data={data.vegetables} />

				<GroupsList />

				<ProductList title="Exclusive offer" data={data.fruits} />
				<ProductList title="Best selling" data={data.fruits} />

				<GroupsList />

				<ProductList
					title="All"
					data={[ ...data.vegetables, ...data.fruits ]}
				/>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
