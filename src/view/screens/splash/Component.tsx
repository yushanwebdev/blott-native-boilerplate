import * as React from 'react';
import {Image, SafeAreaView, View} from 'react-native';

import {tabbedNavigation} from '../../../navigators/navigation';
import {ButtonDefault} from '../../elements/buttons';
import {GLOBAL} from '../../styles/global';
import styles from './styles';

import {Props} from './index';

const Splash: React.FC<Props> = props => {
  React.useEffect(() => {
    const {splashLaunched} = props;
    splashLaunched();
  }, []);

  const navigateToHome = () => {
    tabbedNavigation();
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/images/rnn2.png')}
        />
        <Image
          resizeMode={'center'}
          source={require('../../assets/images/rn_ts.png')}
        />
        <ButtonDefault title={'Continue To App'} onClick={navigateToHome} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
