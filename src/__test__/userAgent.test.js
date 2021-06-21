import { DESKTOP, MOBILE } from '../constants/devices';
import { getDeviceType } from '../helpers/userAgent';
import { MockDesktopNavigator, MockMobileNavigator } from './mockData/navigator';
import { getMockDesktopRequest, getMockMobileRequest } from './mockData/request';

test('Desktop Device', () => {
  expect(getDeviceType(getMockDesktopRequest())).toBe(DESKTOP)
});

test('Mobile Device', () => {
  expect(getDeviceType(getMockMobileRequest())).toBe(MOBILE)
});

test('Navigator Desktop', () => {
  MockDesktopNavigator()
  expect(getDeviceType()).toBe(DESKTOP)
});

test('Navigator Mobile', () => {
  MockMobileNavigator()
  expect(getDeviceType()).toBe(MOBILE)
});