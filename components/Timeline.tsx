import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '@/styles';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  company: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {

  const renderItem = ({ item, index }: { item: TimelineItem, index: number }) => (
    <View style={styles.rowContainer}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
            {item.icon}
        </View>
        {index < data.length - 1 && <View style={styles.line} />}
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.company}>{item.company}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.list}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeContainer: {
    minWidth: 52,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  time: {
    textAlign: 'center',
    backgroundColor: '#ff9797',
    color: 'white',
    padding: 5,
    borderRadius: 13,
  },
  circleContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: colors.secondary,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  description: {
    color: colors.secondary,
    marginTop: 10,
  },
  company: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default Timeline;
