import { useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { ApplicationContext } from "../../contexts/ApplicationContext"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Lista = () => {

    const { loginOrLogoutUser } = useContext(ApplicationContext)

    const logout = () => {
        loginOrLogoutUser(false)
    }

    return (
        <View style={styles.containerList}>

            <TouchableOpacity onPress={logout} style={styles.logoutButton}>
                <Text style={styles.logoutText}>
                    <Icon name="logout" size={16} color="#fff" />
                </Text>
            </TouchableOpacity>

            <Text style={styles.listaText}>
                Lista
            </Text>
        </View>
    )
}


export default Lista

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        backgroundColor: '#242424',
        padding: 16,
        justifyContent: 'center',
    },
    logoutButton: {
        position: 'absolute',
        top: 10,
        right: 4,
        padding: 8,
        backgroundColor: '#9810fa',
        borderRadius: 4,
        rotate: '90deg'
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
    listaText: {
        color: 'white',
        fontSize: 20,
    },
})