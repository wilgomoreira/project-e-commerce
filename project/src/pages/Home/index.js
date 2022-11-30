import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import firebase from '../../service/firebaseConnection'
import Feather from 'react-native-vector-icons/Feather';
import Product from "../../components/Product"
import { CartContext } from '../../contexts/CartContext'

import circularSaw from '../../images/circular-saw.png'
import washer from '../../images/washer.png'
import combiDrill from '../../images/combi-drill.png'
import toolBag from '../../images/tool-bag.png'
import pieceHome from '../../images/piece-home-repair.png'

export default function Home() {
    const { cart, addItemCart } = useContext(CartContext);
    const navigation = useNavigation();

    const [products, setProducts] = useState([
        { id: 1, name: 'Circular Saw', price: 158.00, img: circularSaw},
        { id: 2, name: 'Washer', price: 99.00, img: washer},
        { id: 3, name: 'Combi Drill', price: 148.00, img: combiDrill},
        { id: 4, name: 'Repair Kit', price: 119.00, img: pieceHome},
        { id: 5, name: 'Tool Bag', price: 39.00, img: toolBag},
    ])

    async function logout() {
        await firebase.auth().signOut();
        navigation.navigate('Login');
        alert('Logout')
    }

    function handleAddCart(item) {
        addItemCart(item)
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>List of Products</Text>
                <TouchableOpacity style={styles.buttonCart} onPress={() => navigation.navigate('Cart')}>
                    <View style={styles.dot}>
                        <Text style={styles.dotText}> {cart?.length} </Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
                    <Feather name="log-out" size={30} color="#000" />
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,
        borderBottomWidth: 15,
        borderBottomColor: '#466e95',
        zIndex: 99,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15
    },
    buttonCart: {

    },
    buttonLogout: {
        marginRight: 15,
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText: {
        fontSize: 12,
    }

})