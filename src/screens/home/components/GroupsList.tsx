import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React from 'react';
import Block from '../../../components/Block';
import RText from '../../../components/RText';
import data from '../../../utils/data';
import colors from './../../../utils/colors';

const { width } = Dimensions.get('screen');

type Props = {};

const GroupsList = (props: Props) => {
	const renderItem = (item: {
		name: string;
		color: string;
		picture: ReturnType<typeof require>;
	}) => (
		<Block
			shadow
			row
			bRadius={12}
			align="center"
			justify="center"
			style={styles.container}
			color={item.color}
		>
			<Block row align="center">
				<Image
					source={item.picture}
					style={{
						width: 80,
						height: 80,
						resizeMode: 'contain'
					}}
				/>
				<RText bold large>
					{item.name}
				</RText>
			</Block>
		</Block>
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
