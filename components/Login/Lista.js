import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from "react-native"
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LogoutButton from "../LogoutButton";

const list = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([]);


    const addTAsk = () => {
        if (task.trim() === '') return;
        setList([...list, task]);
        setTask('');
    }

    return (
        <View style={styles.containerList}>

            <LogoutButton />

            <View >

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', marginBottom: 1 }}>

                    <TextInput
                        placeholder="Adicionar tarefa"
                        placeholderTextColor="gray"
                        value={task}
                        onChangeText={setTask}
                        style={{
                            width: '88%',
                            borderWidth: 1,
                            marginBottom: 10,
                            padding: 8,
                            borderColor: 'white',
                            color: 'white',
                        }} />

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#9810fa",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 4,
                            width: 40,
                            height: 40,
                            marginLeft: 4,
                        }}
                        onPress={addTAsk}   >
                        <Text >
                            <FontAwesomeIcon name="plus" size={16} color="#fff" />
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={{
                        maxHeight: 200,
                        height: 200
                    }}
                    data={list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            {item}
                        </Text>} />
            </View>

        </View>
    )
}


export default list

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

})