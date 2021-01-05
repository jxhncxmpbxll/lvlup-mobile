import {StyleSheet} from 'react-native';

const CompleteTaskStyles = StyleSheet.create({
  CompleteTaskContainer: {
    flex:1,
    backgroundColor: 'red'
  },
  TextInput: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    marginTop: 10,
    borderRadius: 2,
    padding: 7,
    maxHeight: 40,
    minWidth: '50%',
    maxWidth: '90%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  completeButton: {
    flex: 1,
    maxHeight: 40,
    minWidth: '90%',
    maxWidth: '90%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    position: 'relative',
    backgroundColor: "turquoise",
  },
  closeIcon: {
    position: 'relative',
    maxHeight: 10,
    maxWidth: 10,
  },
  closeBox: {
    position: 'absolute',
    padding: 8,
    top: -55,
    right: -55,
    zIndex: 1000,
  }
})

export default CompleteTaskStyles;