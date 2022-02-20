import {
  Dimensions,
  FlatList,
	Image,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React from 'react';
// Components
import Block from './../../components/Block';
import RText from './../../components/RText';
import SearchBar from './../home/components/SearchBar';
import data from '../../utils/data';
// Types
import { GroupI } from '../../redux/reduxTypes';
import colors from './../../utils/colors';

const {width} = Dimensions.get('screen')

type Props = {};

const ExploreScreen = (props: Props) => {

  const renderGroup = (group: GroupI) => (
    <Block style={styles.group} justify="center" align="center" color={group.color}>
      <Image source={group.picture} style={styles.image} />
      <RText bold large>{group.name}</RText>
    </Block>
  )

  
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			keyboardDismissMode="interactive"
      style={{backgroundColor: colors.white}}
		>
			<KeyboardAvoidingView
				behavior="padding"
				style={{ paddingHorizontal: 20, paddingTop: 25 }}
			>

        <Block justify="center" align="center" style={{marginVertical: 30}}>
          <RText black title >Find Products</RText>
        </Block>
        
				<Block style={{marginBottom: 15}}>
          <SearchBar />
        </Block>

        <FlatList 
          data={data.groups}
          renderItem={({item}) => renderGroup(item)}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginVertical: 10,
          }}
        />
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default ExploreScreen;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    marginBottom: 20,
    width: 80,
    height: 80, 
  },
  group: {
    width: (width*0.5) - 30,
    height: 180,
    borderRadius: 14
  }
});
