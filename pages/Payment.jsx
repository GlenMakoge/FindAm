import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a payment method</Text>
      <View style={styles.paymentMethodsContainer}>
        <TouchableOpacity style={styles.paymentMethodButton}>
          <View style={styles.paymentMethodIconContainer}>
            <Text style={styles.paymentMethodIcon}>MTN</Text>
          </View>
          <Text style={styles.paymentMethodText}>MTN Mobile Money</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentMethodsContainer}>
        <TouchableOpacity style={styles.paymentMethodButton}>
          <View style={styles.paymentMethodIconContainer}>
            <Text style={styles.paymentMethodIcon}>Orange</Text>
          </View>
          <Text style={styles.paymentMethodText}>Orange Money</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.payerInputContainer}>
        <Text style={styles.label}>Payer's Mobile Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+233 688 985 889"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    marginBottom: 10,
  },
  paymentMethodButton: {
    backgroundColor: '#1B1464',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodIconContainer: {
    backgroundColor: '#FFC107',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  paymentMethodIcon: {
    color: '#1B1464',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethodText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  payerInputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#1B1464',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Payment;