// Packages
import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabsStackScreenProps } from '../../../routes/routeTypes';
// Components
import Block from '../../../components/Block';
import RText from '../../../components/RText';
// Utils
import data from '../../../utils/data';
import colors from './../../../utils/colors';
import { GroupI } from '../../../redux/reduxTypes';

const { width } = Dimensions.get('screen');

type Props = {};

const GroupsList = (props: Props) => {

	const nav = useNavigation<TabsStackScreenProps>()
	
	const renderItem = (group: GroupI
		) => (
		<TouchableOpacity
			onPress={() => nav.navigation.navigate('Group', {group: group.name})}
		>
			<Block
			shadow
			row
			bRadius={12}
			align="center"
			justify="center"
			style={styles.container}
			color={group.color}
		>
			<Block row align="center">
				<Image
					source={group.picture}
					style={{
						width: 80,
						height: 80,
						resizeMode: 'contain'
					}}
				/>
				<RText bold large>
					{group.name}
				</RText>
			</Block>
		</Block>
		</TouchableOpacity>
	);

	return (
		<FlatList
			data={data.groups}
			renderItem={({ item }) => renderItem(item)}
			keyExtractor={(item, idx) => idx.toString()}
			horizontal
			showsHorizontalScrollIndicator={false}
			ListHeaderComponent={() => <Block style={{ width: 20 }} />}
			ListFooterComponent={() => <Block style={{ width: 20 }} />}
			style={{ marginLeft: -20, width, marginVertical: 20 }}
			ItemSeparatorComponent={() => (
				<Block style={{ marginHorizontal: 10 }} />
			)}
		/>
	);
};


export default GroupsList;

const styles = StyleSheet.create({
	container: {
		width: 220,
		height: 90,
		marginVertical: 10,
	}
});
