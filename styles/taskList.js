import {StyleSheet} from 'react-native';

const taskListStyles = StyleSheet.create({
  taskListContainer: {
    height: '40%',
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%'
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
    flex: 1,
    backgroundColor: 'pink',
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