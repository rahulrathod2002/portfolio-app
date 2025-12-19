import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { experiences } from '@/constants';
import { styles as customStyles, colors } from '@/styles';

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: any;
    date: string;
    points: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardIconContainer}>
        <Image
          source={experience.icon}
          style={styles.cardIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.date}>{experience.date}</Text>
        <Text style={styles.title}>{experience.title}</Text>
        <Text style={styles.company}>{experience.company_name}</Text>
        <View style={styles.pointsContainer}>
          {experience.points.map((point: string, index: number) => (
            <View key={`point-${index}`} style={styles.point}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const Experience = () => {
  return (
    <View style={styles.container}>
      <Text style={[customStyles.sectionHeadText, styles.heading]}>
        Work Experience.
      </Text>

      <View style={styles.timeline}>
        {experiences.map((experience: any, index: number) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  heading: {
    marginBottom: 20,
    textAlign: 'center',
  },
  timeline: {
    marginTop: 20,
  },
  card: {
    marginBottom: 24,
  },
  cardIconContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  cardIcon: {
    width: '60%',
    height: '60%',
  },
  cardContent: {
    marginLeft: 65,
    borderLeftWidth: 2,
    borderLeftColor: colors.secondary,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  date: {
    color: colors.secondary,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    marginTop: 8,
  },
  company: {
    fontSize: 16,
    color: colors.secondary,
    marginTop: 4,
  },
  pointsContainer: {
    marginTop: 12,
  },
  point: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    color: colors.secondary,
    marginRight: 8,
  },
  pointText: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Experience;
