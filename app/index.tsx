import { Text, View, } from "react-native";
import TaskBoard from "@/src/components/TaskBoard";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}>
        <TaskBoard/>
      <StatusBar style="light"/>
    </View>

  );
}
