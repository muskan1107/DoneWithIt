import {StyleSheet, Switch} from 'react-native';
import Screen from './app/components/Screen';
import { useState } from 'react';
import LoginScreen from './app/screen/LoginScreen';

const categories = [
  {label:'Furniture', value:1},
  {label:'Clothing', value:2},
  {label:'Cameras', value:3},
]
function App() {
  const [category, setCategory] = useState(categories[0]);
  return ( 
    <Screen>
      <LoginScreen />
    </Screen>   
  );
}












export default App;
const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingTop:100,
    backgroundColor:'#f8f4f4',
  }
})
