import {StyleSheet} from 'react-native';

const taskStyles = StyleSheet.create({
  taskContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  taskIcon: {
    height: 20,
    width: 20,
    margin: 15
  },
  taskName: {
    flex: 1,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 12,
  }
})

export default taskStyles;