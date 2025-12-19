import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, FlatList, StatusBar } from 'react-native';
import { colors } from '@/styles';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import Feedbacks from '@/components/Feedbacks';
import Contact from '@/components/Contact';
import ErrorBoundary from '@/components/ErrorBoundary';

const herobg = require('../assets/images/herobg.png');

const sections = [
  { key: 'about', component: <About /> },
  { key: 'experience', component: <Experience /> },
  { key: 'tech', component: <Tech /> },
  { key: 'works', component: <Works /> },
  { key: 'feedbacks', component: <Feedbacks /> },
  { key: 'contact', component: <Contact /> },
];

const Index = () => {
  const flatListRef = React.useRef<FlatList<any>>(null);
  const [statusBarHidden, setStatusBarHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const handleScroll = (id: string) => {
    if (id === 'top') {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
      return;
    }
    const index = sections.findIndex((item) => item.key === id);
    if (index !== -1) {
      flatListRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0.5 });
    }
  };

  const onScroll = (event: any) => {
    const currentY = event.nativeEvent.contentOffset.y;
    if (currentY > lastY) {
      setStatusBarHidden(true);
    } else {
      setStatusBarHidden(false);
    }
    setLastY(currentY);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={statusBarHidden} barStyle="light-content" />
      <Navbar onScroll={handleScroll} />

      <FlatList
        ref={flatListRef}
        data={sections}
        keyExtractor={(item) => item.key}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <ImageBackground source={herobg} style={styles.heroBg}>
            <ErrorBoundary>
              <Hero onScroll={() => handleScroll('about')} />
            </ErrorBoundary>
          </ImageBackground>
        }
        renderItem={({ item }) => (
          <View style={styles.section}>
            <ErrorBoundary>{item.component}</ErrorBoundary>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContent: {
    backgroundColor: colors.primary,
  },
  heroBg: {
    width: '100%',
  },
  section: {
    backgroundColor: colors.primary,
  },
});

export default Index;
