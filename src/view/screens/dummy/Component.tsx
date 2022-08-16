import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {CText} from '../../elements/custom';
import {GLOBAL} from '../../styles/global';

import {Props} from './index';

const Dummy: React.FC<Props> = props => (
  <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
    <CText>{'This Screen has been pushed over Home screen'}</CText>
    <CText>{`Prop passed: ${props.dummyText}`}</CText>
  </SafeAreaView>
);

export default Dummy;
