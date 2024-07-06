import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const Claim = ({ route }) => {
  const { id, image, name, status, timeUploaded } = route.params;
  const [claimImage, setClaimImage] = useState(null);
  const [isImageMatch, setIsImageMatch] = useState(false);
  const navigation = useNavigation();

  const handleClaim = async () => {
    if (claimImage) {
      // Perform the image matching process (for now, just assume it's a match)
      const isMatch = true;
      setIsImageMatch(isMatch);

      if (isMatch) {
        // If the images match, navigate to the Payment screen
        navigation.navigate('Payment', {
          id,
          image,
          name,
          status,
          timeUploaded,
        });
      } else {
        console.log('Images do not match. Unable to claim the item.');
      }
    } else {
      console.log('Please select an image to claim the item.');
    }
  };

  const handleImagePick = async () => {
    // Open the image picker and update the claimImage state
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setClaimImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button  title='Payment' onPress={() => navigation.navigate('Payment')} />

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.status, status === 'Missing' ? styles.missingStatus : styles.foundStatus]}>
          {status}
        </Text>
        <Text style={styles.timeUploaded}>{timeUploaded}</Text>
      </View>
      {claimImage ? (
        <View style={styles.claimImageContainer}>
          <Image source={{ uri: claimImage }} style={styles.claimImage} />
          <Text style={[styles.imageMatchStatus, isImageMatch ? styles.matchStatus : styles.noMatchStatus]}>
            {isImageMatch ? 'Images match' : 'Images do not match'}
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.selectImageButton} onPress={handleImagePick}>
          <Text style={styles.selectImageText}>Select an image to claim</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.claimButton} onPress={handleClaim}>
        <Text style={styles.claimButtonText}>Claim Item</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  // Existing styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginVertical: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    marginVertical: 4,
  },
  missingStatus: {
    color: 'red',
  },
  foundStatus: {
    color: 'green',
  },
  timeUploaded: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 4,
  },
  claimImageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  claimImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  imageMatchStatus: {
    fontSize: 16,
  },
  matchStatus: {
    color: 'green',
  },
  noMatchStatus: {
    color: 'red',
  },
  selectImageButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  selectImageText: {
    fontSize: 16,
    color: '#007aff',
  },
  claimButton: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  claimButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Claim;