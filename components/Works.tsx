import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking, useWindowDimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { projects, github, web } from '@/constants';
import { styles as customStyles, colors } from '@/styles';

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Tag[];
  image: any;
  link: string | null;
  linkType: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  link,
  linkType,
}) => {
  const { width } = useWindowDimensions();
  const cardWidth = width > 768 ? (width / 3) - 32 : width > 640 ? (width / 2) - 24 : width - 48;

  const cardClickHandler = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <Pressable onPress={cardClickHandler} style={{ width: cardWidth, margin: 8 }}>
      <View style={styles.card}>
        <ImageBackground source={image} style={styles.cardImage} imageStyle={{ borderRadius: 16 }}>
          {link && (
            <View style={styles.cardImageLink}>
              <LinearGradient colors={['#434343', '#000000']} style={styles.linkGradient}>
                <Image source={linkType === 'github' ? github : web} style={styles.linkIcon} />
              </LinearGradient>
            </View>
          )}
        </ImageBackground>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>

        <View style={styles.tagsContainer}>
          {tags.map((tag: Tag) => (
            <Text key={tag.name} style={[styles.tag, { color: colors[tag.color as keyof typeof colors] }]}>
              #{tag.name}
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

const Works = () => {
  return (
    <View style={customStyles.padding}>
      <View>
        <Text style={customStyles.sectionSubText}>My work</Text>
        <Text style={customStyles.sectionHeadText}>Projects.</Text>
      </View>

      <View style={{ width: '100%' }}>
        <Text style={styles.description}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </Text>
      </View>

      <View style={styles.cardsContainer}>
        {projects.map((project: ProjectCardProps, index: number) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginTop: 12,
    color: colors.secondary,
    fontSize: 17,
    maxWidth: '100%',
    lineHeight: 30,
  },
  cardsContainer: {
    marginTop: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 28,
  },
  card: {
    backgroundColor: colors.tertiary,
    borderRadius: 16,
    padding: 20,
  },
  cardImage: {
    width: '100%',
    height: 230,
  },
  cardImageLink: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  linkGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  cardContent: {
    marginTop: 20,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 8,
    color: colors.secondary,
    fontSize: 14,
  },
  tagsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    fontSize: 14,
  },
});

export default Works;
