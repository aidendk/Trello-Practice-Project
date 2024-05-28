import { useAuth } from "@realm/react"
import { Text, View } from "react-native"


const Login = () => {
    const {logInWithAnonymous} = useAuth();

    const guestLogin = () => {
        logInWithAnonymous();
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={guestLogin}>Sign in as guest</Text>
        </View>
    )
}

export default Login 