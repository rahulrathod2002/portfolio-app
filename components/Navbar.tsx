import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Linking, useWindowDimensions } from 'react-native';
import { navLinks } from '@/constants';
import { styles as customStyles, colors } from '@/styles';

import Menu from '@/assets/images/menu.svg';
import Close from '@/assets/images/close.svg';
import Github from '@/assets/images/github.png';
import MyImage from '@/assets/images/myImage.jpg';
import Linkedin from '@/assets/images/linkedin.svg';


interface NavbarProps {
  onScroll: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScroll }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowDimensions();

  const isDesktop = width > 768;

  return (
    <View style={[styles.container, customStyles.paddingX]}>
      <View style={styles.innerContainer}>
        <View style={styles.leftContainer}>
          <Pressable onPress={() => {
            setActive('');
            onScroll('top');
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={MyImage} style={styles.logo} />
              <Text style={styles.logoText}>
                Rahul &nbsp;
                {isDesktop && <Text>| Full-Stack Developer</Text>}
              </Text>
            </View>
          </Pressable>
          <View style={styles.socials}>
            <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/rahul-rathod-238a11292/')} >
              <Linkedin width={36} height={36} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://github.com/rahulrathod2002/')} >
              <Image source={Github} style={styles.socialIcon} />
            </Pressable>
          </View>
        </View>

        {isDesktop ? (
          <View style={styles.desktopNav}>
            {navLinks.map((nav) => (
              <Pressable key={nav.id} onPress={() => {
                setActive(nav.title);
                onScroll(nav.id);
              }}>
                <Text style={[styles.navLink, active === nav.title ? styles.activeNavLink : {}]}>
                  {nav.title}
                </Text>
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.mobileNav}>
            <Pressable onPress={() => setToggle(!toggle)}>
              {toggle ? <Close width={28} height={28} /> : <Menu width={28} height={28} />}
            </Pressable>
            {toggle && (
              <View style={styles.mobileMenu}>
                {navLinks.map((nav) => (
                  <Pressable
                    key={nav.id}
                    onPress={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      onScroll(nav.id);
                    }}
                  >
                    <Text style={[styles.mobileNavLink, active === nav.title ? styles.activeNavLink : {}]}>
                      {nav.title}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    position: 'absolute',
    top: 0,
    zIndex: 20,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1280,
    marginHorizontal: 'auto',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    borderRadius: 18,
  },
  logoText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  socials: {
    flexDirection: 'row',
    gap: 16,
    marginLeft: 20,
  },
  socialIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  desktopNav: {
    flexDirection: 'row',
    gap: 40,
  },
  navLink: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: '500',
  },
  activeNavLink: {
    color: colors.white,
  },
  mobileNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  mobileMenu: {
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.9)',
    position: 'absolute',
    top: 60,
    right: 0,
    marginHorizontal: 16,
    marginVertical: 8,
    minWidth: 140,
    zIndex: 10,
    borderRadius: 12,
  },
  mobileNavLink: {
    // fontFamily: 'Poppins', // Assuming Poppins is loaded
    fontWeight: '500',
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 16,
  },
});

export default Navbar;
