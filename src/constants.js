/* eslint new-cap: "off" */
import Leaflet from 'leaflet';
import * as ICONS from './assets';

export const PERIOD = 1000;

export const POLYLINE_OPTIONS = {
  outlineWidth: 1,
  outlineColor: '#ffffff',
  weight: 3,
  palette: {
    0: '#fdbb2d',
    0.3: '#b21f1f',
    1: '#1a2a6c',
  },
  min: 0,
  max: 50000,
};

export { ICONS };

export const BUILT_ICONS = Object.assign(
  {},
  ...Object.keys(ICONS).map(iconName => ({
    [iconName]: new Leaflet.icon({
      iconUrl: ICONS[iconName],
      iconSize: [30, 30],
    }),
  })),
);

export const COLORS = [
  '#26764E', '#F08526', '#9CFF54', '#721B49', '#A7D8F8',
  '#2AFDBC', '#FBE870', '#711302', '#2572C2', '#1C271D',
  '#632E85', '#1E5F7A', '#D8B2F5', '#D307A2', '#F391B5',
  '#F180F5', '#3A1E2E', '#AE7707', '#3E3D0E', '#6AB06E',
];

export const NAV_OVERLAY_OPTIONS = {
  minZoom: 6,
  maxZoom: 12,
};

export const REFRESH_FRAME_RATE = 200;
