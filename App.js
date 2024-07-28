import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, createNavigatorFactory } from '@react-navigation/native';
import PlantList from "./PlantList";

export default function App() {
  const Stack = createNavigation();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigation inttialRoute="PlantList">
          <Stack.screen="PlantList">{PlantList}<Stack>
      </NavigationContainer>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
