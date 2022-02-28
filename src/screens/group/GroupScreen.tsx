// Packages and types
import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamListType } from '../../routes/routeTypes';
// Components
import Screen from '../../components/Screen/Screen';
import RText from '../../components/RText';

// Utils
import data from '../../utils/data';
import { GroupNamesType } from '../../redux/reduxTypes';
import Product from '../../components/Product';
import Block from '../../components/Block';
import colors from '../../utils/colors';

const GroupScreen: FC<StackScreenProps<MainStackParamListType, 'Group'>> = (
	props
) => {
	const groupName: GroupNamesType = props.route.params.group;

	return (
		<Screen
			style={styles.container}
			backgroundColor={colors.white}
			preset="fixed"
		>
			<FlatList
				data={data[groupName]}
				renderItem={({ item }) => (
					<Product flex product={item} />
				)}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item, idx) => idx.toString()}
				style={{
					paddingHorizontal: 20
				}}
				columnWrapperStyle={{
					justifyContent: 'space-between',
				}}
			/>
		</Screen>
	);
};

export default GroupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
