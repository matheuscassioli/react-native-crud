import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react';
import { ApplicationContext } from '../../contexts/ApplicationContext';

const LogoutButton = () => {

    const { loginOrLogoutUser } = useContext(ApplicationContext)

    const logout = () => {
        loginOrLogoutUser(false)
    }

    return <TouchableOpacity
        onPress={logout}
        style={styles.logoutButton}>
        <Text style={styles.logoutText}>
            <MaterialIcon
                name="logout"
                size={16}
                color="#fff" />
        </Text>
    </TouchableOpacity>
}

export default LogoutButton

const styles = StyleSheet.create({
    logoutButton: {
        position: 'absolute',
        top: 10,
        right: 4,
        padding: 8,
        backgroundColor: '#9810fa',
        borderRadius: 4,
        rotate: '90deg'
    },
})