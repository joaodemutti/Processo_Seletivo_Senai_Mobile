import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from './+not-found';
import HomeScreen from './(tabs)';

import { Image, StyleSheet, Text, View } from 'react-native';


const Stack = createStackNavigator();

export default function RootLayout() {

  return (
      <Stack.Navigator >
        <Stack.Screen name="(tabs)" options={{headerTitle:headerTitle}} component={HomeScreen} />
        <Stack.Screen name="+not-found" component={NotFoundScreen}/>
      </Stack.Navigator>
  );
}

const headerTitle = (props:any)=><View style={styles.titleContainer}>
            <Image style={styles.avatarImage} />
            <Text style={styles.title}>Bom-dia, usuária!</Text>
            </View>


const styles = StyleSheet.create({
titleContainer:{display:'flex',flexDirection:'row',alignItems:'center',gap:10},
avatarImage:{width:50,height:50,backgroundColor:"grey"},
title:{fontFamily:"Ubuntu-Bold",fontSize:20,fontWeight:"bold"}
})