import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { CartContext } from '../../contexts/CartContext'
import CardItem from '../../components/CardItem'
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Feather name="arrow-left" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Cart</Text>

        <Text style={styles.total}>Total: $ {total}</Text>
      </View>

      <View>
        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={() => <Text> Cart is empty...</Text>}
          renderItem={({ item }) => (
            <CardItem
              data={item} addAmount={() => addItemCart(item)} removeAmount={() => removeItemCart(item)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14,
    paddingEnd: 14,

  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 15,
    borderBottomColor: '#487db1',
    zIndex: 99,
    marginTop: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 70
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 40
  }
})