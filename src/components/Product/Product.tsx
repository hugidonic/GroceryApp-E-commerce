import {
	Alert,
	Dimensions,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import Block from '../Block';
import RText from '../RText';
import colors from './../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { ProductI } from '../../redux/reduxTypes';
import { ProductScreenProps } from '../../routes/routeTypes';

type Props = {
	product: ProductI;
	flex?: boolean;
};

const { width } = Dimensions.get('screen');
const IMAGE_SIZE = 120;

const Product = ({ product, flex }: Props) => {
	const nav = useNavigation<ProductScreenProps['navigation']>();

	const handleNavigation = () => {
		nav.navigate('Product', { product });
	};

	return (
		<Block
			shadow
			bRadius={20}
			style={{ maxWidth: width * 0.5, minWidth: width * 0.4 }}
			color="#fff"
			padding={[ 8, 8, 8, 8 ]}
			margin={[ 8, 8, 8, 8 ]}
		>
			<TouchableOpacity
				onPress={handleNavigation}
				style={{ flex: 1, padding: 12 }}
			>
				<Image
					source={product.picture}
					style={{
						resizeMode: 'contain',
						width: IMAGE_SIZE,
						height: IMAGE_SIZE
					}}
				/>

				<Block style={{ marginVertical: 8 }}>
					<RText black medium>
						{product.name}
					</RText>
					<RText color="#999" bold>
						{product.description}
					</RText>
				</Block>

				<Block row align="center" justify="space-between">
					<RText black medium>
						$ {product.price}
					</RText>
					<AddBtn />
				</Block>
			</TouchableOpacity>
		</Block>
	);
};

const AddBtn = () => {
	return (
		<Block color={colors.primary} bRadius={18} style={styles.btn}>
			<Feather name="plus" size={32} color="#fff" />
		</Block>
	);
};

export default Product;

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.2,
		shadowRadius: 4.65,
		borderWidth: 1,

		elevation: 8
	},
	btn: {
		padding: 8
	}
});
