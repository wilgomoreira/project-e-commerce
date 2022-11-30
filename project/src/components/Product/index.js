import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Product({data, addToCart}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> {data.name} </Text>
                <Text style={styles.price}> $ {data.price} </Text>
            </View>

            <Image source={data.img} style={styles.img} resizeMode='contain'/>

            <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img:{
        height: 100,
        width: 100,
    },
    buttonAdd: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#466e95',
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 10,
        marginRight: 20
    },
    buttonText:{
        color: '#fff'
    },
    price:{
        fontWeight: 'bold',
        fontSize: 20
    }
})