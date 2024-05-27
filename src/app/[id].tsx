import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const TaskDetails = () => {
    const {id} = useLocalSearchParams();

    return (
        <View style={{padding: 10}}>
            <Stack.Screen options={{title: 'Task Details'}}/>
            <Text style={{color: 'white', fontSize: 20}}>id: {id}</Text>
        </View>
    )
}

export default TaskDetails;