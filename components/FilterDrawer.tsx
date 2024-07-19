import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Drawer, Button } from 'react-native-paper';

const FilterDrawer = ({ navigation }) => {
  return (
    <Drawer.Section style={styles.drawerSection}>
      <Drawer.Item label="Filter Option 1" />
      <Drawer.Item label="Filter Option 2" />
      <Drawer.Item label="Filter Option 3" />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.closeDrawer()}>
          Apply
        </Button>
      </View>
    </Drawer.Section>
  );
};

const styles = StyleSheet.create({
  drawerSection: {
    flex: 1,
    paddingTop: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default FilterDrawer;
