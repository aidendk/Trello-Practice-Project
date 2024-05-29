import { useAuth } from "@realm/react"
import { Text, View } from "react-native"


const AnonymousLogin = () => {
    const {logInWithAnonymous} = useAuth();

    logInWithAnonymous();

    return null; 
}

export default AnonymousLogin;