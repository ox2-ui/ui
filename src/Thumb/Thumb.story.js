import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Thumb from './Thumb';

const image1 = 'https://randomuser.me/api/portraits/women/50.jpg';
const image2 = 'https://randomuser.me/api/portraits/women/18.jpg';
const logo1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rohde_%26_Schwarz_Logo.svg/800px-Rohde_%26_Schwarz_Logo.svg.png';

const localImg = 'ktLb8Hqxo28WdToq5.jpg';

storiesOf('Thumb', module)
  .add('square image', () => (
    <Thumb image={image1} width={60} height={60} />
  ))
  .add('offline square image', () => (
    <Thumb
      image={image1}
      offlineEnabled={true}
      localImg={localImg}
      width={60}
      height={60}
    />
  ))
  .add('landscape logo', () => (
    <Thumb image={logo1} width={120} height={60} />
  ))
  .add('square white bg image', () => (
    <Thumb image={image2} width={60} height={60} />
  ))
  .add('icon placeholder', () => (
    <Thumb icon="user" width={60} height={60} />
  ))
  .add('icon placeholder small', () => (
    <Thumb icon="user" width={30} height={30} />
  ))
  .add('square image 80', () => (
    <Thumb image={image1} width={80} height={80} />
  ))
  .add('square 80 icon placeholder', () => (
    <Thumb icon="user" width={80} height={80} />
  ));
