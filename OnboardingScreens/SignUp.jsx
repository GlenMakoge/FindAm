import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleBackPress = () => {
    navigation.navigate('Onboarding4');
  };

  const handleSignUp = () => {
    
    // Implement sign-up logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Navigate to the Login page
    navigation.navigate('TabNavigation');
  };

  const handleGoogleSignUp = () => {
    // Implement Google sign-up logic here
    console.log('Google sign-up');
  };

  const handleFacebookSignUp = () => {
    // Implement Facebook sign-up logic here
    console.log('Facebook sign-up');
  };

  const handleAppleSignUp = () => {
    // Implement Apple sign-up logic here
    console.log('Apple sign-up');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="black" onPress={handleBackPress} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
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
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!confirmPasswordVisible}
          />
          <Ionicons
            name={confirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="#ccc"
            onPress={toggleConfirmPasswordVisibility}
          />
        </View>
        <TouchableOpacity style={styles.submitButton}  onPress={handleSignUp}>
          <Text style={styles.submitButtonText}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.alternativeSignUpContainer}>
          <TouchableOpacity style={styles.google} onPress={handleGoogleSignUp}>
            <FontAwesome name="google" size={32} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook} onPress={handleFacebookSignUp}>
            <AntDesign name="facebook-square" size={32} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.apple} onPress={handleAppleSignUp}>
            <Ionicons name="logo-apple" size={32} color="#000000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.alreadyHaveAccountText}>Already have an account? <Text style={styles.signintext} onPress={() => navigation.navigate('Login')}>Sign in</Text></Text>
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
  alternativeSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  alternativeSignUpIcon: {
    marginHorizontal: 12,
  },
  alreadyHaveAccountText: {
    marginTop: 16,
    color: '#001d4a',
  },
  google: {
    marginRight: 60,
  },
  facebook: {
    marginRight: 60,
  },
  signintext: {
    color: '#FFC600',
  }
});