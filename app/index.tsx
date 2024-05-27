import { Text, View, SafeAreaView } from "react-native";
import TaskListItem from "@/src/components/TaskListItem";
import TaskList from "@/src/components/TaskList";

export default function Index() {
  return (
    <SafeAreaView    
      style={{
        flex: 1,
      }}>
      <View
        style={{
          padding: 10,
        }}
      >
        <TaskList/>

      </View>
    </SafeAreaView>

  );
}
