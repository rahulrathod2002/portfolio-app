import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const colors = {
  primary: "#050816",
  secondary: "#aaa6c3",
  tertiary: "#151030",
  "black-100": "#100d25",
  "black-200": "#090325",
  "white-100": "#f3f3f3",
  white: '#FFFFFF',
  'orange-text-gradient': '#f12711',
  'green-text-gradient': '#11998e',
  'blue-text-gradient': '#2f80ed',
  'pink-text-gradient': '#ec008c',
};

const styles = StyleSheet.create({
  paddingX: {
    paddingHorizontal: width > 640 ? 64 : 24,
  },
  paddingY: {
    paddingVertical: width > 640 ? 64 : 24,
  },
  padding: {
    paddingHorizontal: width > 640 ? 64 : 24,
    paddingVertical: width > 640 ? 64 : 40,
  },
  heroHeadText: {
    fontWeight: '900',
    color: colors.white,
    fontSize: width > 768 ? 80 : width > 640 ? 60 : width > 450 ? 50 : 40,
    lineHeight: width > 768 ? 98 : undefined,
    marginTop: 8,
  },
  heroSubText: {
    color: '#dfd9ff',
    fontWeight: '500',
    fontSize: width > 768 ? 30 : width > 640 ? 26 : width > 450 ? 20 : 16,
    lineHeight: width > 768 ? 40 : undefined,
  },
  sectionHeadText: {
    color: colors.white,
    fontWeight: '900',
    fontSize: width > 768 ? 60 : width > 640 ? 50 : width > 450 ? 40 : 30,
  },
  sectionSubText: {
    fontSize: width > 640 ? 18 : 14,
    color: colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export { styles, colors };
