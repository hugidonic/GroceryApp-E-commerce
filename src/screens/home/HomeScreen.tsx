import { FlatList, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
// Custom components
import Block from '../../components/Block';
import RText from '../../components/RText';
// Components
import SearchBar from './components/SearchBar';
import BGBlock from './components/BGBlock';
import ItemList from '../../components/ItemList';
import data from './../../utils/data';
import GroupsList from './components/GroupsList';
import colors from './../../utils/colors';

type Props = {
};

const HomeScreen = (props: Props) => {
	return (
		<ScrollView style={{backgroundColor: colors.white}} showsVerticalScrollIndicator={false} keyboardDismissMode="interactive">
			<KeyboardAvoidingView behavior="padding" style={{ paddingHorizontal: 20, paddingTop: 40 }}>
				
				<SearchBar />
        {/* TODO: Make this a slider fadeinout thing */}
				<BGBlock />

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
