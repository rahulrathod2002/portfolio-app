import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles as customStyles, colors } from '@/styles';

const { height } = Dimensions.get('window');

interface HeroProps {
  onScroll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScroll }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, customStyles.paddingX]}>
        <View style={styles.lineAndDot}>
          <View style={styles.dot} />
          <LinearGradient
            colors={['#804dee', 'rgba(60, 51, 80, 0)']}
            style={styles.gradientLine}
          />
        </View>
        <View>
          <Text style={customStyles.heroHeadText}>
            Hi, I&apos;m <Text style={{ color: '#915EFF' }}>Rahul Rathod</Text>
          </Text>
          <Text style={customStyles.heroSubText}>
            I craft dynamic user interfaces,{'\n'}
            build scalable fullstack applications,{'\n'}
            and turn ideas into seamless digital experiences.
          </Text>
        </View>
      </View>
      <View style={styles.scrollIndicatorContainer}>
        <Pressable onPress={onScroll}>
          <View style={styles.scrollIndicator}>
            <View style={styles.scrollIndicatorDot} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: height,
    marginHorizontal: 'auto',
  },
  innerContainer: {
    position: 'absolute',
    top: 120,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  lineAndDot: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#915EFF',
  },
  gradientLine: {
    width: 4,
    height: 320, // sm:h-80
  },
  scrollIndicatorContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollIndicator: {
    width: 35,
    height: 64,
    borderRadius: 17,
    borderWidth: 4,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 8,
  },
  scrollIndicatorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.secondary,
    marginBottom: 4,
  },
});

export default Hero;
