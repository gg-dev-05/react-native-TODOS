import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput placeholder='new Todo...'
                onChangeText={changeHandler}
                value={text}
                style={styles.input}
            />
            <Button onPress={() => {
                submitHandler(text)
                setText('')
            }} title='ADD' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
