import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Painel
      </Text>
      <View style={styles.panel}>
        <View style={styles.panelItem}>
        % de Evasão
        </View>
        <View style={styles.panelItem}>
        % de Empregabilidade
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{alignItems:"center"},
  title:{fontSize:20,fontWeight:"bold",paddingVertical:30},
  panel:{display:"flex",flexDirection:"row"},
  panelItem:{display:"flex",height:200,borderWidth:1,borderStyle:"solid",borderColor:"black",width:200}
})