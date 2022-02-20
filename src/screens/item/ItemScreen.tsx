import { Image, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import Block from '../../components/Block';
import RText from '../../components/RText';
import { ItemScreenProps } from '../../routes/routeTypes';
import colors from './../../utils/colors';
import PrimaryBtn from './../../components/PrimaryBtn';

type Props = {};

const ItemScreen = (props: ItemScreenProps) => {
	const { item } = props.route.params;
	return (
		<Block color={colors.white} flex>
			{/*There will be the Header */}

				<Block justify="center" align="center" >
					<Image source={item.picture} style={styles.picture} />
				</Block>

				{/* Product info */}
				<Block border color="#fff" style={styles.info} flex>
					{/*  */}
					<Block row justify='space-between' align="center" style={{marginBottom: 15}}>
						<Block style={styles.price}>
							<RText black medium color={colors.primary}>${item.price}</RText>
						</Block>

						<Block color={colors.lightenRed} bRadius={12} style={{padding: 12}}>
							<AntDesign name="heart" size={20} color={colors.red} />
							{/* <AntDesign name="hearto" size={20} color="black" /> */}
						</Block>
					</Block>

					<Block>
						<RText black title>{item.name}</RText>
						<Block row align="center" style={{marginVertical: 15}}>
							<Block row align="center" style={{marginRight: 40}}>
								<AntDesign
									name="star"
									size={24}
									color={colors.primary}
									style={{marginRight: 10}}
									/>
								<RText color={colors.secondary}>4,8 Rating</RText>
							</Block>
							<Block row align="center">
								<Ionicons
									name="chatbox-ellipses"
									size={24}
									color={colors.primary}
									style={{marginRight: 10}}
								/>
								<RText color={colors.secondary}>7 comments</RText>
							</Block>
						</Block>

						<RText color={colors.secondary}>
							Бананы — одна из древнейших пищевых культур, а для
							тропических стран важнейшее пищевое растение и
							главная статья экспорта. Спелые бананы широко
							употребляются в пищу по всему миру, их используют
							при приготовлении большого количества блюд
						</RText>
					</Block>

					<Block
						justify="center"
						row
						style={{
							position: 'absolute',
							bottom: 25,
							right: 0,
							left: 0
						}}
					>
						<PrimaryBtn title="Add to cart" func={() => {}} />
					</Block>
				</Block>
		</Block>
	);
};

export default ItemScreen;

const styles = StyleSheet.create({
	picture: {
		width: 200,
		height: 200,
		resizeMode: 'contain'
	},
	price: {
		borderRadius: 20,
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: "#DEFAE8",
		justifyContent: 'center',
		alignItems: 'center'
	},
	info: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingHorizontal: 20,
		paddingTop: 40,
	}
});
