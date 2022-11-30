import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function CardItem({ data, addAmount, removeAmount }) {
    const [amount, setAmount] = useState(data?.amount)

    function handleIncrease() {
        addAmount();
        setAmount(item => item + 1)
    }

    function handleDecrease() {
        removeAmount()

        if (amount === 0) {
            setAmount(0);
            return;
        }

        setAmount(item => item - 1)
    }

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.price}>$ {data.price}</Text>
                </View>

                <View style={styles.amountContainer}>
                    <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
                        <Text style={{ color: '#fff' }}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.amount}>{amount}</Text>

                    <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
                        <Text style={{ color: '#fff' }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
                
            <View>
                <Image source={data.img} style={styles.img} resizeMode='contain'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#DFDFDf',
        borderRadius: 2,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontSize: 16,
    },
    img:{
        height: 80,
        width: 80,
    },
    amountContainer: {
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonAdd: {
        backgroundColor: "#466e95",
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 10,
    },
    amount: {
        marginLeft: 14,
        marginRight: 14,
    }
})