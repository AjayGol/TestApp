import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function AddItemScreen() {
  const navigation = useNavigation();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const renderSlider = () => {
    const boxWidth = Dimensions.get('window').width - 110;

    return (
        <View style={styles.boxContainer}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#FFFFFF' }}>
            Age
          </Text>

          <Text style={{ fontSize: 16, fontWeight: '700', color: '#FFFFFF' }}>
            Hauteur
          </Text>
        </View>
    );
  };

  const renderTextBox = () => {
    return (
        <View style={styles.boxContainer}>
          <View style={styles.textInput}>
            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 13, fontWeight: '500', color: '#FF9433' }}>
                Origine
              </Text>
              <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#FFFFFF',
                    marginTop: 4,
                  }}>
                Scandinave
              </Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#FFFFFF',
                    marginTop: 4,
                  }}>
                Scandinave
              </Text>
            </View>
          </View>

          <View style={[styles.textInput, {marginTop : 20}]}>
            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 13, fontWeight: '500', color: '#FF9433' }}>
                Origine
              </Text>
              <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#FFFFFF',
                    marginTop: 4,
                  }}>
                Scandinave
              </Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#FFFFFF',
                    marginTop: 4,
                  }}>
                Scandinave
              </Text>
            </View>
          </View>
        </View>
    );
  };

  return (
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF9433' }}>
            Cancel
          </Text>

          <Text style={{ fontSize: 16, fontWeight: '500', color: '#FFFFFF' }}>
            Filter
          </Text>

          <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF9433' }}>
            Done
          </Text>
        </View>

        {renderSlider()}
        {renderTextBox()}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  boxContainer: {
    padding: 16,
    borderRadius: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: 20,
    marginBottom: 34,
  },
  photos: {
    backgroundColor: '#EBF9FF',
    marginTop: 20,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderWidth: 3,
    borderColor: '#A3E6FF',
  },
  plusImage: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    height: 22,
    width: 22,
  },
  headerListTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: 68,
    backgroundColor: 'rgba(31, 18, 22, 1)',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderColor: '#FF9433',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
