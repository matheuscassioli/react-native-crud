
import { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { ApplicationContext } from '../../contexts/ApplicationContext.jsx'
import { colors } from '../../src/styles/colors.js'

const Login = () => {

    const { matheus } = useContext(ApplicationContext)

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        console.warn('user', user)
        console.warn('password', password)

        if (user == 'admin' && password == '1234') {

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
        width: '90%',
        paddingVertical: 16,
        paddingHorizontal: 0,
    },
    labelLogin: {
        color: 'white',
    },
});

export default Login