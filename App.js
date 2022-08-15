import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { TextInput } from 'react-native-web';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
 const [courseGoals,setCourseGoals] = useState([]);

 function startAddGoalHandler() {
  setModalIsVisible(true);
 }

 function endAddGoalHandler() {
  setModalIsVisible(false);
 }

  function addGoalHandler(enteredGoalText) {
   setCourseGoals(currentCourseGoals =>[
    ...currentCourseGoals,
    {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
    function deleteGoalHandler(id) {
     setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=>goal.id !==id);
     });
    }
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc"
      onPress={startAddGoalHandler} />
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}
     onCancel={endAddGoalHandler} />
     {modalIsVisible && <GoalInput onAddGoal={addGoalHandler}/>}
    <View style={styles.appContainer} >
    <FlatList data={courseGoals} renderItem={itemData => {
      
      return( <GoalItem text={itemData.item.text}
        id={itemData.item.id}
       onDeleteItem={deleteGoalHandler}/>
      )
      
    }} alwaysBounceVertical={false}/>
     
       
    </View> 
        </View>
        </>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    flex:1,
   paddingTop:50,
   paddingHorizontal:16,
 
  },
goalsContainer:{
  flex:5
},

});
