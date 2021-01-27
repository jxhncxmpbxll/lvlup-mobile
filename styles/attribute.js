import {StyleSheet} from 'react-native';

const attributeStyles = StyleSheet.create({
  attributeContainer: {
    flexShrink: 1,
    height: '100%',
    minWidth: '15%',
    width: '15%',
    paddingStart: 0,
    margin: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attributeValue: {
    height: '45%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attributeIconContainer: {
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attributeTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    marginBottom: 5,
  },
  attributeIcon: {
    height: 25,
    width: 25,
  },
  strText: {
    color: 'darkblue',
    fontWeight: 'bold',
  },
  intText: {
    color: 'green',
    fontWeight: 'bold',
  },
  chrText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  healText: {
    color: 'red',
    fontWeight: 'bold',
  }
})

export default attributeStyles;