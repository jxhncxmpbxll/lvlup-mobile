import {StyleSheet} from 'react-native';

const addTaskStyles = StyleSheet.create({
  addTaskContainer: {
    flex: 1,
    zIndex: 2000,
    height: 250,
    width: 300,
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    borderBottomWidth: 0,
    marginTop: 10,
    borderRadius: 2,
    padding: 7,
    height: 30,
    width: '50%',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray'
  },
  categoryPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: '100%',
    maxHeight: 35,
    width: 150,
  },
  createButton: {
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "turquoise",
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 7,
    height: 10,
    width: 10,
  }
})

export default addTaskStyles;