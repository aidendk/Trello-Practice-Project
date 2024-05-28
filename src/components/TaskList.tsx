import { View, Text, FlatList, TextInput, Button, StyleSheet } from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";
import { useRealm, useQuery, useUser } from "@realm/react";
import { Task } from "../models/Task";

export default function TaskList() {
    const realm = useRealm();

    // this queries the db and finds already created tasks, rendered on line 31
    const tasks = useQuery(Task);

    // gets user using app rn
    const user = useUser();

    // used for text input stuff
    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        //setTasks([...tasks, {description: newTask}]);
        // all modifications, update, read, delete, should happen inside realm.write which is a transaction.
        realm.write(() => {
            realm.create(Task, {description: newTask, user_id: user.id});
        });

        setNewTask('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Todo
            </Text>

            {/* the list of tasks  - data takes in "tasks" from querying db, then renders it with renderItem which
            renders taskListItem, prop task takes item which has info of description, id, etc. to send to TaskListItem
            realm creates new item with id and description etc, then flatList receives new data and sends to be rendered*/}
            <FlatList data={tasks} contentContainerStyle={{gap: 5}} renderItem={({item}) => (
                <TaskListItem task={item}/>
            )}/>

            {/* new task input */}
            <TextInput 
                value={newTask}
                onChangeText={setNewTask}
                placeholder="New Task" 
                placeholderTextColor='gray' 
                style={styles.input}
            />
            <Button title="Add task" onPress={createTask}/>
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
        backgroundColor: '#101112', 
        padding: 10, 
        borderRadius: 5, 
        gap: 5
    },
    title: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginVertical: 10
    },
    input: {
        color: 'white', 
        padding: 15, 
        backgroundColor: '#1D2125',
        borderRadius: 5
    }
});