//  Packages and types
import { FlatList, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { TabsStackScreenProps } from '../../routes/routeTypes';
// Custom components
import Block from '../../components/Block/Block';
import RText from '../../components/RText';
// Components
import SearchBar from './components/SearchBar';
import BgSlider from './components/BgSlider';
import ItemList from '../../components/ItemList';
import GroupsList from './components/GroupsList';
// Utils
import data from './../../utils/data';
import colors from './../../utils/colors';

const HomeScreen = (props: TabsStackScreenProps) => {
	return (
		<ScrollView style={{backgroundColor: colors.white}} showsVerticalScrollIndicator={false} keyboardDismissMode="interactive">
			<KeyboardAvoidingView behavior="padding" style={{ paddingHorizontal: 20, paddingTop: 40 }}>
				
				<SearchBar />
        {/* TODO: Make this a slider fadeinout thing */}
				
				<BgSlider />

				<ItemList title="Fruits" data={data.fruits} />
				<ItemList title="Vegetables" data={data.vegetables} />

        <GroupsList />

				<ItemList title="Exclusive offer" data={data.fruits} />
				<ItemList title="Best selling" data={data.fruits} />
				
        <GroupsList />

				<ItemList title="All" data={[...data.vegetables, ...data.fruits]} />
				
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
