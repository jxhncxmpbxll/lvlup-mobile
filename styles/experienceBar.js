import {StyleSheet} from 'react-native';

const XPStyles = StyleSheet.create({
  lvl: {
    flexDirection: 'column',
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lvlHeader: {
    fontSize: 10,
    textAlign: 'center',
  },
  lvlNum: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  XPContainer: {
    height: '5%',
    width: '75%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  XPBar: {
    height: '100%',
    minHeight: '100%',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  XPHeader: {
    fontWeight: 'bold',
    margin: 10,
  }
})

export default XPStyles;