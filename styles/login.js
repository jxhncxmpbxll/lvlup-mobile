import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    borderBottomWidth: 0,
    marginBottom: 10,
    borderRadius: 2,
    paddingVertical: 5,
    width: '100%',
  },
  errorText: {
    marginTop: 40,
    fontSize: 10,
    color: 'red'
  },
  loginButton: {
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  }
})

export default loginStyles;