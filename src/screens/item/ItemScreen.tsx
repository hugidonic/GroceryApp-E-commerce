import { Dimensions, Image, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import Block from '../../components/Block/Block';
import RText from '../../components/RText';
import { ItemScreenProps } from '../../routes/routeTypes';
import colors from './../../utils/colors';
import PrimaryBtn from './../../components/PrimaryBtn';
import ItemInfo from './components/ItemInfo';
import ItemScreenHeader from './components/ItemScreenHeader';

type Props = {};

const {height} = Dimensions.get('screen')

const ItemScreen = (props: ItemScreenProps) => {
	const { item } = props.route.params;
	const goBack = props.navigation.goBack
	
	return (
		<Block color={colors.white} flex>
			<ItemScreenHeader goBack={goBack} />

			<Block justify="center" align="center" style={{marginVertical: 15}}>
				<Image source={item.picture} style={styles.picture} />
			</Block>

			<ItemInfo item={item} />

			<Block
				justify="center"
				row
				style={{
					position: 'absolute',
					bottom: 40,
					right: 0,
					left: 0
				}}
			>
				<PrimaryBtn title="Add to cart" func={() => {}} />
			</Block>
		</Block>
	);
};

export default ItemScreen;

const PictureSize = height*0.25

const styles = StyleSheet.create({
	picture: {
		width: PictureSize,
		height: PictureSize,
		resizeMode: 'contain'
	},
});
