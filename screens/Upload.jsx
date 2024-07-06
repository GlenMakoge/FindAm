import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

const Upload = ({ onUpload, onItemUploaded}) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [uploadedItems, setUploadedItems] = useState([]);

  const handleImagePicker = async (cameraMode = false) => {
    let result;
    if (cameraMode) {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      // Request camera roll permissions
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setItemImage(result.uri);
    }
  };

  const handleUpload = () => {
    const itemId = generateUniqueId();
    const newItem = {
      id: itemId,
      name: itemName,
      description: itemDescription,
      image: itemImage,
      timestamp: new Date().toLocaleString(),
      status: 'Missing',
    };

    if (onUpload) {
      onUpload(newItem);
    }
    setUploadedItems([...uploadedItems, newItem]);
    console.log(`Uploading item: ${itemName}, ${itemDescription}, ${itemImage}, ID: ${itemId}`);

    if (onItemUploaded) {
      onItemUploaded(newItem);
    }
    // Add logic to upload the item to a server or database
  };

  const addRecentItem = (newItem) => {
    setUploadedItems([...uploadedItems, newItem]);
  };

  function generateUniqueId() {
    return 'item-' + Math.random().toString(36).substring(2, 10);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Missing Item</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Description"
          value={itemDescription}
          onChangeText={setItemDescription}
          multiline
        />
        <View style={styles.imageUploadContainer}>
          <TouchableOpacity style={styles.imageUpload} onPress={() => handleImagePicker(false)}>
            {itemImage ? (
              <Image source={{ uri: itemImage }} style={styles.image} />
            ) : (
              <Text style={styles.imageText}>Upload Image</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageUpload} onPress={() => handleImagePicker(true)}>
            <FontAwesome name="camera" size={24} color="white" />
            <Text style={styles.imageText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemsContainer}>
        {uploadedItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemTimestamp}>{item.timestamp}</Text>
              <Text style={styles.itemStatus}>Status: {item.status}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  multilineInput: {
    height: 100,
  },
  imageUploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  imageUpload: {
    backgroundColor: '#0077b6',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  imageText: {
    color: 'white',
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#0077b6',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemsContainer: {
    marginTop: 20,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
  },
  itemTimestamp: {
    fontSize: 12,
    color: '#666',
  },
  itemStatus: {
    fontSize: 12,
    color: '#666',
  },
});

export default Upload;