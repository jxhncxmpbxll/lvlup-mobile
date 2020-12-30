import {StyleSheet} from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
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
})

export default appStyles;