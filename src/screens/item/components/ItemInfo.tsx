import { StyleSheet,  } from 'react-native';
import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import Block from '../../../components/Block';
import RText from './../../../components/RText';

type Props = {};

const ItemInfo = (props: Props) => {
	// ref
	const bottomSheetRef = React.useRef<BottomSheet>(null);

	// variables
	const snapPoints = React.useMemo(() => [ '25%', '50%' ], []);

	return (
    <Block flex>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <Block flex>
          <RText>Awesome 🎉</RText>
        </Block>
      </BottomSheet>
    </Block>
	);
};

export default ItemInfo;

const styles = StyleSheet.create({});
