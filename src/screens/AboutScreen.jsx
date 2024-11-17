import React from "react";
import MainLayout from "../layouts/MainLayout";
import {StyleSheet, Text,} from 'react-native';
function AboutScreen() {
    const appName = "My Simple App";
    const developerName = "Param Patani";
    const currentDate = new Date().toLocaleDateString();
  
    return (
      <MainLayout>
        <Text style={styles.title}>{appName}</Text>
        <Text style={styles.text}>Developed by: {developerName}</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </MainLayout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#282c34',
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#61dafb',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
      color: '#ffffff',
      textAlign: 'center',
    },
  });
  

export default AboutScreen