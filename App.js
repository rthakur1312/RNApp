// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(prevCourseGoals => [
              ...prevCourseGoals,
              {text: enteredGoalText, id:Math.random().toString()},
              ]
            )
            endAddGoalHandler(); 
  }

  function deleteGoalHandler(id) {
    console.log('DELETE :' + id);
    setCourseGoals(prevCourseGoals => {
      return prevCourseGoals.filter((goal) => goal.id !== id )
    });
  }

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function endAddGoalHandler() {
    setModalVisible(false)
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title="Add new Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      {<GoalInput visible={modalVisible} addGoalHandler={addGoalHandler} endAddGoalHandler={endAddGoalHandler}  />}
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} id={itemData.item.id} deleteGoalHandler={deleteGoalHandler} />
      }} 
      keyExtractor={(item, index) => item.id} 
      alwaysBounceVertical={false} />
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
  goalsContainer: {
    flex: 5,
    paddingTop: 10
  },
});
