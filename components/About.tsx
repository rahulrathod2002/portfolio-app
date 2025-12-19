import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { services } from '@/constants';
import { styles as customStyles, colors } from '@/styles';

interface ServiceCardProps {
  title: string;
  icon: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  const { width } = useWindowDimensions();
  const cardWidth = width > 768 ? (width / 5) - 24 : width > 640 ? (width / 3) - 20 : width - 48;

  return (
    <View style={{ width: cardWidth, margin: 8 }}>
        <LinearGradient
            colors={['#00cea8', '#bf61ff']}
            style={styles.gradient}
        >
            <View style={styles.card}>
                <Image source={icon} style={styles.cardIcon} />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </LinearGradient>
    </View>
  );
};

const About = () => {
  return (
    <View style={customStyles.padding}>
      <View>
        <Text style={customStyles.sectionSubText}>Introduction</Text>
        <Text style={customStyles.sectionHeadText}>Overview.</Text>
      </View>

      <Text style={styles.description}>
        I&apos;m a results-driven Java Fullstack Developer from Pune, with expertise in React.js, Spring Boot, and React Native. With a proven track record in building scalable web apps, I&apos;ve enhanced UI interaction by 20% and cut backend downtime by 15%. Currently shaping live e-learning solutions at GBM SoftTech, I blend backend logic with engaging frontend design to deliver user-focused platforms like Skillmate. I believe in clean code, collaboration, and constant learning.
      </Text>

      <View style={styles.cardsContainer}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginTop: 16,
    color: colors.secondary,
    fontSize: 17,
    maxWidth: '100%',
    lineHeight: 30,
  },
  cardsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  gradient: {
    borderRadius: 20,
    padding: 1,
  },
  card: {
    backgroundColor: colors.tertiary,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 280,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardIcon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  cardTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default About;
