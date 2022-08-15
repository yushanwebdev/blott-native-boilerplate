import * as React from 'react';
import {View} from 'react-native';

import router from '../../navigators/router';
import {BUTTON_DEFAULT} from '../elements/buttons';
import {CTEXT} from '../elements/custom';
import {Card, Carousel} from '../elements/layout';
import {GLOBAL} from '../styles/global';

interface Props {
  componentId: string;
  title?: string;
}

const data = [
  {title: 'Men'},
  {title: 'Women'},
  {title: 'Devices'},
  {title: 'Gadgets'},
  {title: 'Games'},
  {title: 'Men'},
  {title: 'Women'},
  {title: 'Devices'},
];

const Category: React.FC<Props> = ({componentId, title}: Props) => {
  const renderItem = ({item}: any) => {
    return (
      <View
        style={GLOBAL.ELEMENTS.CategoryIcons}
        key={`carousel-item-${item.title}`}
      >
        <BUTTON_DEFAULT
          title={item.title}
          onClick={() =>
            router.showListingsScreen(
              {componentId, passProps: {query: item.title}},
              item.title,
            )
          }
        />
        <CTEXT style={GLOBAL.TEXT.body}>{item.title}</CTEXT>
      </View>
    );
  };

  return (
    <Card>
      {title && <CTEXT style={GLOBAL.TEXT.h1}>{title}</CTEXT>}
      <Carousel data={data} item={renderItem} />
    </Card>
  );
};

export {Category};
