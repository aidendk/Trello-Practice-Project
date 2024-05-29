import { useAuth, useUser } from "@realm/react";
import { View, Text, Button } from "react-native";

export default function Profile () {
    const user = useUser();

    const {logOut} = useAuth();



    return (
        <View>
            <Text style={{color: 'white'}}>{user.id}</Text>
            <Button onPress={() => user.logOut()} title="sign out"></Button>
        </View>
    )
}