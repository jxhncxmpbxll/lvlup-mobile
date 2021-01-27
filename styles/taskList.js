import {StyleSheet} from 'react-native';

const taskListStyles = StyleSheet.create({
  taskListContainer: {
    maxHeight: 275,
    height: '100%',
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    height: '100%',
    maxHeight: 275,
    width: '100%',
  },
  scrollContent: {
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 25
  },
  taskListHeaderContainer: {
    flexDirection: 'row',
  },
  taskListHeader: {
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
  },
  tasks: {
    height: '100%',
    width: '100%',
  },
  addIcon: {
    flexDirection: 'row',
    marginTop: 25,
    right: -100,
    justifyContent: 'flex-end',
    height: 15,
    width: 15,
  }
})

export default taskListStyles;