import { View, Text, StyleSheet} from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default function TaskListItem({task}:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.description}</Text>
            
            <AntDesign name="close" size={16} color="gray" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D2125',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
})