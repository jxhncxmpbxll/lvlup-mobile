import {StyleSheet} from 'react-native';

const addTaskStyles = StyleSheet.create({
  addTaskContainer: {
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
  createButton: {
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  }
})

export default addTaskStyles;