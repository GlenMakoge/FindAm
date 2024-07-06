import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleBackPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Name:', name);
    console.log('Password:', password);
    // Navigate to the Home page
    navigation.navigate('TabNavigation');
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
    console.log('Facebook login');
  };

  const handleAppleLogin = () => {
    // Implement Apple login logic here
    console.log('Apple login');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="black" onPress={handleBackPress} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login into your account</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <Ionicons
            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="#ccc"
            onPress={togglePasswordVisibility}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.alternativeLoginContainer}>
          <TouchableOpacity style={styles.google} onPress={handleGoogleLogin}>
            <FontAwesome name="google" size={32} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook} onPress={handleFacebookLogin}>
            <AntDesign name="facebook-square" size={32} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.apple} onPress={handleAppleLogin}>
            <Ionicons name="logo-apple" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.noAccountText}>Do not have an Account? <Text style={styles.signuptext} onPress={() => navigation.navigate('SignUp')}>SignUp</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  backButton: {
    marginLeft: 16,
    marginVertical: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#FFC600',
  },
  input: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#FFC600',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  submitButtonText: {
    color: '#001d4a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alternativeLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  alternativeLoginIcon: {
    marginHorizontal: 12,
  },
  noAccountText: {
    marginTop: 16,
    color: '#001d4a',
  },
  google: {
    marginRight: 60,
  },
  facebook: {
    marginRight: 60,
  },
  signuptext: {
    color: '#FFC600',
  }
});