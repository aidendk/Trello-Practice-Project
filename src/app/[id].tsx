import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput } from "react-native";
import { useObject, useRealm } from "@realm/react";
import { Task } from "../models/Task";
import { BSON } from "realm";
import { useState } from "react";

const TaskDetails = () => {
    // by default with expo router this becomes a navigatable page

    // this is the page of description for each task list item. using [id]
    // allows this to change based on the variable, like how sites do
    //twitter.com/[username]

    // this looks for id of page
    const {id} = useLocalSearchParams();

    const task = useObject<Task>(Task, new BSON.ObjectId(id as string));

    const [updatedDescription, setUpdatedDescription] = useState(
        task?.description
    );

    const realm = useRealm();

    const updateDescription = () => {
        if (!task) {
            return;
        }
        realm.write(() => {
            task.description = updatedDescription
        })
    }

    if (!task) {
        return <Text>not found</Text>
    }

    return (
        <View style={{padding: 10}}>
            <Stack.Screen options={{title: 'Task Details'}}/>
            <TextInput 
                value={updatedDescription}
                onChangeText={setUpdatedDescription}
                onEndEditing={updateDescription}
                style={{color: 'white', fontSize: 20}}
            />
        </View>
    )
}

export default TaskDetails;