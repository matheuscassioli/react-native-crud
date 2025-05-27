
import { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { ApplicationContext } from '../../contexts/ApplicationContext.jsx'
import { colors } from '../../src/styles/colors.js'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const { loginOrLogoutUser } = useContext(ApplicationContext)

    const navigation = useNavigation();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        if (user == 'admin' && password == '1234') {
            loginOrLogoutUser(true)

            setTimeout(() => {
                navigation.navigate('Lista');
            }, 400)
        }
    }

    return (
        <View style={styles.containerLogin}>

            <View>
                <Text style={styles.labelLogin}>Usuário</Text>
                <TextInput
                    placeholder="Usuário"
                    onChangeText={setUser}
                    value={user}
                    placeholderTextColor="gray"
                    style={{ borderWidth: 1, marginBottom: 10, padding: 8, borderColor: 'white', color: 'white' }} />
            </View>

            <View>
                <Text style={styles.labelLogin}>Senha:</Text>
                <TextInput
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={{ borderWidth: 1, marginBottom: 10, padding: 8, borderColor: 'white', color: 'white' }} />
            </View>

            <View style={{ marginTop: 16 }}>
                <Button style={styles.button} title="Entrar" color={colors.buttons} onPress={login} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#242424',
        padding: 16,
        justifyContent: 'center',
    },
    labelLogin: {
        color: 'white',
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        marginBottom: 10,
        padding: 8,
        borderRadius: 4,
    },
});


export default Login