import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textMain}>Synapse</Text>
        <View style={styles.logHelp}>
          <Text style={styles.textLogin}>Login/Signup</Text>
          <TouchableOpacity
            style={{
              marginLeft: 150,
            }}>
            <Text style={styles.butForgot}> Need help?</Text>
          </TouchableOpacity>
        </View>
        <Icon name="email" size={20} color="grey" style={styles.iconEmail} />
        <TextInput
          style={styles.inpEmail}
          placeholder="Enter email or Phone"
          placeholderTextColor={'grey'}></TextInput>
        <Icon name="key" size={20} color="grey" style={styles.iconPass} />
        <TextInput
          style={styles.inpPass}
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor={'grey'}
        />
        <Text style={styles.textLogin2}>OR</Text>

        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA',
            }}
            style={styles.google}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://i.imgur.com/IBjq8wx.png' }}
            style={styles.facebook}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.butLogin}>
        <Text style={{ color: 'grey' }}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //overflow: 'hidden',
    backgroundColor: '#d1fffe',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: '#49dad7',
    //flex : 0.6,
    height: 400,
    //marginTop: 80,
    //marginBottom: 120,
    //flexWrap: 'wrap',
    //alignSelf : "center",
    shadowColor: 'black',
    //alignItems : 'center',
    borderRadius: 15,
    borderColor: '#d3d2d1',
    borderWidth: 3,
    elevation: 8,
    width: 300,
  },
  textMain: {
    fontWeight: 'bold',
    //marginTop: 50,
    color: 'white',
    alignSelf: 'center',
    fontSize: 65,
  },

  logHelp: {
    // flex: 0.5,
    flexDirection: 'row',
    //padding:5
    //paddingHorizontal : 5
    //paddingVertical : 5
  },

  textLogin: {
    marginTop: 5,
    color: 'grey',
    marginLeft: 7,
    // marginRight:150,
    fontSize: 13,
  },

  textLogin2: {
    marginTop: 10,
    color: 'grey',
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 13,
  },

  inpEmail: {
    borderBottomColor: 'grey',
    //marginHorizontal: 40,
    alignSelf: 'center',
    color: 'grey',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderRadius: 50,
    marginTop: 40,
    height: 50,
    width: 250,
  },

  inpPass: {
    borderBottomColor: 'grey',
    //marginHorizontal: 40,
    color: 'grey',
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderRadius: 50,
    marginTop: 10,
    height: 50,
    width: 250,
  },

  butLogin: {
    backgroundColor: 'white',
    borderColor: 'grey',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    width: 150,
    marginTop: -25,
  },
  butForgot: {
    //marginTop: 5,
    color: 'green',
    //alignSelf : "flex-end",
    fontSize: 13,
    marginLeft: -30,
  },
  google: {
    height: 40,
    width: 40,
    borderColor: 'grey',
    marginHorizontal: 85,
    //marginTop: -40,
    borderWidth: 2,
    borderRadius: 50,
  },
  facebook: {
    height: 45,
    //alignSelf : 'center',
    width: 45,
    borderColor: 'grey',
    marginHorizontal: 170,
    marginTop: -40,
    borderWidth: 2,
    borderRadius: 50,
  },

  iconEmail: {
    position: 'absolute',
    marginTop: 173,
    marginLeft: 45,
  },

  iconPass: {
    position: 'absolute',
    marginTop: 230,
    marginLeft: 45,
  },
});
export default App;
