import React from "react";
import {View, StyleSheet} from 'react-native';
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            {children}
        </View>
        <Footer />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  content: {
    flexGrow: 1,
  }
});

export default MainLayout;