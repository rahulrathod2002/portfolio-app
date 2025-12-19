import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { technologies } from '@/constants';
import { styles as customStyles } from '@/styles';

const Tech = () => {
  const { width } = useWindowDimensions();
  const iconContainerSize = width > 768 ? (width / 5) - 24 : width > 640 ? (width / 4) - 24 : (width - 96) / 3;

  return (
    <View style={[customStyles.padding, styles.container]}>
      {technologies.map((technology: { name: string; icon: any; }) => (
        <View style={[styles.iconContainer, { width: iconContainerSize, height: iconContainerSize }]} key={technology.name}>
          <Image source={technology.icon} style={styles.icon} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 48,
  },
  iconContainer: {
    width: 80,
    height: 80,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Tech;
