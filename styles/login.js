import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    zIndex: 1000,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  TextInput: {
    borderBottomWidth: 0,
    marginBottom: 10,
    borderRadius: 2,
    paddingVertical: 5,
    width: '40%',
    paddingHorizontal: 5,
  },
  errorText: {
    marginTop: 40,
    fontSize: 10,
    color: 'red'
  },
  loginButton: {
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "turquoise",
  }
})

export default loginStyles;