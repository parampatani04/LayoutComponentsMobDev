import React from "react";
import { StyleSheet, View, Text } from "react-native";
function Footer() {
    return (
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 My To-Do App</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      footer: {
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        
      },
      footerText: {
        color: '#000',
        fontSize: 14,
      },
    });
    
export default Footer;