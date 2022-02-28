import { Dimensions, Image, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import Block from '../../components/Block';
import RText from '../../components/RText';
import { ProductScreenProps } from '../../routes/routeTypes';
import colors from '../../utils/colors';
import PrimaryBtn from '../../components/PrimaryBtn';
import ProductInfo from './components/ProductInfo';
import ProductScreenHeader from './components/ProductScreenHeader';

type Props = {};

const {height} = Dimensions.get('screen')

const ProductScreen = (props: ProductScreenProps) => {
	const { product } = props.route.params;
	const goBack = props.navigation.goBack
	
	return (
		<Block color={colors.white} flex>
			<ProductScreenHeader goBack={goBack} />

			<Block justify="center" align="center" style={{marginVertical: 15}}>
				<Image source={product.picture} style={styles.picture} />
			</Block>

			<ProductInfo product={product} />

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

export default ProductScreen;

const PictureSize = height*0.25

const styles = StyleSheet.create({
	picture: {
		width: PictureSize,
		height: PictureSize,
		resizeMode: 'contain'
	},
});
