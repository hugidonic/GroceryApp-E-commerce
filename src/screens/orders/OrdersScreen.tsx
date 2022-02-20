import { StyleSheet, View } from 'react-native';
import React from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import Block from './../../components/Block';
import RText from './../../components/RText';
import colors from './../../utils/colors';
import PrimaryBtn from '../../components/PrimaryBtn';

type Props = {};

const OrdersScreen = (props: Props) => {
	// ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // variables
  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <Block flex style={{padding: 20}}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Block flex color={colors.lightenRed} justify="center" align="center">
          <RText large>Awesome 🎉</RText>
        </Block>
      </BottomSheet>
    </Block>
  );

};

export default OrdersScreen;

const styles = StyleSheet.create({});
