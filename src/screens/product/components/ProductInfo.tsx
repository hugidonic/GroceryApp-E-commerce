// Packages
import React from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import ProgressCircle from 'react-native-progress-circle';
// Utils
import colors from '../../../utils/colors';
import { ProductI } from '../../../redux/reduxTypes';
import { Ionicons, AntDesign } from '@expo/vector-icons';

// Components
import Block from '../../../components/Block';
import RText from '../../../components/RText';

type Props = {
	product: ProductI;
};

const banana = {
	protein: 1.5,
	fats: 0.2,
	carbs: 21.8,
}

const all = banana.protein + banana.fats + banana.carbs 

const proteinPercentage = +(banana.protein / all * 100).toFixed(2)
const fatsPercentage = +(banana.fats / all * 100).toFixed(2)
const carbsPercentage = +(banana.carbs / all * 100).toFixed(2)

const ProductInfo = ({ product }: Props) => {
	// ref
	const bottomSheetRef = React.useRef<BottomSheet>(null);

	// variables
	const snapPoints = React.useMemo(() => [ '60%', '100%' ], []);

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			animateOnMount
			backgroundStyle={{ borderRadius: 40 }}
			style={{
				paddingHorizontal: 20,
				shadowColor: '#000'
			}}
		>
			<Block
				row
				justify="space-between"
				align="center"
				style={{ marginVertical: 15 }}
			>
				<Block style={styles.price}>
					<RText black medium color={colors.primary}>
						${product.price}
					</RText>
				</Block>

				<Block
					color={colors.lightenRed}
					bRadius={12}
					style={{ padding: 12 }}
				>
					<AntDesign name="heart" size={20} color={colors.red} />
					{/* <AntDesign name="hearto" size={20} color="black" /> */}
				</Block>
			</Block>

			<Block>
				<RText black title>
					{product.name}
				</RText>
				<Block row align="center" style={{ marginVertical: 15 }}>
					<Block row align="center" style={{ marginRight: 40 }}>
						<AntDesign
							name="star"
							size={24}
							color={colors.primary}
							style={{ marginRight: 10 }}
						/>
						<RText color={colors.secondary}>4,8 Rating</RText>
					</Block>
					<Block row align="center">
						<Ionicons
							name="chatbox-ellipses"
							size={24}
							color={colors.primary}
							style={{ marginRight: 10 }}
						/>
						<RText color={colors.secondary}>7 comments</RText>
					</Block>
				</Block>

				<RText color={colors.secondary}>
					Бананы — одна из древнейших пищевых культур, а для
					тропических стран важнейшее пищевое растение и главная
					статья экспорта. Спелые бананы широко употребляются в пищу
					по всему миру, их используют при приготовлении большого
					количества блюд
				</RText>

				<Block style={{marginTop: 50}} row justify="space-between" align="center">
					<ProgressCircle
						percent={proteinPercentage}
						radius={50}
						borderWidth={8}
						color={colors.primary}
						shadowColor="#ccc"
						bgColor="#fff"
					>
						<RText medium>{proteinPercentage}%</RText>
					</ProgressCircle>
					<ProgressCircle
						percent={fatsPercentage}
						radius={50}
						borderWidth={8}
						color={colors.red}
						shadowColor="#ccc"
						bgColor="#fff"
					>
						<RText medium>{fatsPercentage}%</RText>
					</ProgressCircle>
					<ProgressCircle
						percent={carbsPercentage}
						radius={50}
						borderWidth={8}
						color="#FFC53A"
						shadowColor="#ccc"
						bgColor="#fff"
					>
						<RText medium>{carbsPercentage}%</RText>
					</ProgressCircle>
				</Block>

				{/* Comments */}
			</Block>
		</BottomSheet>
	);
};

export default ProductInfo;

const styles = StyleSheet.create({
	price: {
		borderRadius: 20,
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: '#DEFAE8',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
