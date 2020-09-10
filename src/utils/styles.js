import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
console.log('width', width, PixelRatio.get());

// compute the PIXEL VALUE for the current device relative to the default device size
const DEFAULT_DEVICE_PIXEL_HEIGHT = 667;
const DEFAULT_DEVICE_PIXEL_WIDTH = 375;

const IOS_WIDTH_MEDIUM = 350;
const IOS_WIDTH_LARGE = 400;
const ANDROID_WIDTH_MEDIUM = 1000;
const ANDROID_WIDTH_LARGE = 1300;

export const computeHPixel = pixel =>
  `${Math.round((pixel / DEFAULT_DEVICE_PIXEL_HEIGHT) * height)}px`;

export const computeWPixel = pixel =>
  `${Math.round((pixel / DEFAULT_DEVICE_PIXEL_WIDTH) * width)}px`;

// compute the PERCENT VALUE for the current device relative to the default device size
export const computeHPercent = percent => `${hp(percent)}px`;
export const computeWPercent = percent => `${wp(percent)}px`;

let fontSizeSmall = '12px';
let fontSizeMedium = ' 16px';
let fontSizeLarge = '22px';

if (Platform.OS === 'ios') {
  if (width > IOS_WIDTH_MEDIUM) {
    fontSizeSmall = '13px';
    fontSizeMedium = '16px';
    fontSizeLarge = '24px';
  }

  if (width > IOS_WIDTH_LARGE) {
    fontSizeSmall = '13px';
    fontSizeMedium = '17px';
    fontSizeLarge = '26px';
  }
} else {
  const pixelRatio = PixelRatio.get();
  if (width * pixelRatio > ANDROID_WIDTH_MEDIUM) {
    fontSizeSmall = '13px';
    fontSizeMedium = '17px';
    fontSizeLarge = '24px';
  }

  if (width * pixelRatio > ANDROID_WIDTH_LARGE) {
    fontSizeSmall = '14px';
    fontSizeMedium = '18px';
    fontSizeLarge = '25px';
  }
}

const fontSizes = {
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
};

export const theme = {
  ...fontSizes,
  red: '#ed1c24',
  black: '#333333',
  defaultBlack: '#000000',
  white: '#ffffff',
  blue: '#3483de',
  lightgrey: '#eaeaea',
  lightmediumgrey: '#bbbbbb',
  mediumgrey: '#999999',
  grey: '#666666',
  darkgrey: '#b2b2b2',
  green: '#52a240',
  spacer: '#D7D7D7',
};
