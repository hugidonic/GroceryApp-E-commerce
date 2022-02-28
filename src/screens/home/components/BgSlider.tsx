import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Block from '../../../components/Block';

const images = [
	'https://www.konfik.ru/wa-data/public/photos/46/11/1146/1146.970.jpg',
	'https://www.hollandandbarrett.ie/the-health-hub/wp-content/uploads/2020/06/shutterstock_291789095-1024x684.jpg',
	'https://www.jigsawplanet.com/RaghavMittal/fruits?rc=face',
	'https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5cdc45bae1a84300b34081f4_5cdc477deb5ea100b2d1356b/,scale_1200',
	'https://samchef.ru/assets/i/ai/4/2/8/i/2875863.jpg',
	'https://ic.pics.livejournal.com/sedov_05/10509632/585235/585235_original.jpg'
];

type Props = {};

const { width } = Dimensions.get('screen');

const BgSlider = (props: Props) => {
	return (
		<Block border style={styles.cover}>
			<Image source={{uri: images[0]}} style={{resizeMode: 'cover'}} />
		</Block>
	);
};

export default BgSlider;

const styles = StyleSheet.create({
	cover: {
		width: '100%',
		height: 120,
		borderRadius: 14,
		marginVertical: 20
	}
});
