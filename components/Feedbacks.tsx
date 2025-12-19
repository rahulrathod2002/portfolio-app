import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { testimonials } from '@/constants';
import { styles as customStyles, colors } from '@/styles';

interface FeedbackCardProps {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: any;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const { width } = useWindowDimensions();
  const cardWidth = width > 768 ? (width / 3) - 32 : width - 48;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Text style={styles.quote}>&quot;</Text>
      <View style={{ marginTop: 4 }}>
        <Text style={styles.testimonial}>{testimonial}</Text>
        <View style={styles.authorContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.authorName}>
              <Text style={{ color: colors['blue-text-gradient'] }}>@</Text> {name}
            </Text>
            <Text style={styles.authorTitle}>
              {designation} of {company}
            </Text>
          </View>
          <Image source={image} style={styles.authorImage} />
        </View>
      </View>
    </View>
  );
};

const Feedbacks = () => {
  return (
    <View style={[styles.container, customStyles.padding]}>
      <View style={[styles.header, { backgroundColor: colors.tertiary }]}>
        <Text style={customStyles.sectionSubText}>What others say</Text>
        <Text style={customStyles.sectionHeadText}>Testimonials.</Text>
      </View>
      <View style={styles.cardsContainer}>
        {testimonials.map((testimonial) => (
          <FeedbackCard key={testimonial.name} {...testimonial} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    backgroundColor: colors['black-100'],
    borderRadius: 20,
  },
  header: {
    borderRadius: 20,
    padding: 20,
    minHeight: 200,
  },
  cardsContainer: {
    marginTop: -80,
    paddingBottom: 56,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 28,
  },
  card: {
    backgroundColor: colors['black-200'],
    padding: 40,
    borderRadius: 24,
  },
  quote: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 48,
  },
  testimonial: {
    color: colors.white,
    letterSpacing: 1,
    fontSize: 18,
  },
  authorContainer: {
    marginTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  authorName: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  authorTitle: {
    marginTop: 4,
    color: colors.secondary,
    fontSize: 12,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
});

export default Feedbacks;
