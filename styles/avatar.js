import {StyleSheet} from 'react-native';

const avatarStyles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'column',
    position: 'relative',
    height: '35%',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTextContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: 5,
    right: 9,
    zIndex: 1000,
  },
  user: {
    fontWeight: 'bold',
    color: 'white',
    zIndex: 1000,
    textAlign: 'right',
    position: 'relative',
  },
  avatar: {
    flex: 1,
    position: 'absolute',
    zIndex: 200,
    height: 75,
    width: 35,
  },
  avatarBG: {
    height: 267,
    width: 293,
    position: 'absolute',
    minHeight: '100%',
    minWidth: '100%',
  },
  primaryTile: {
    height: 200,
    width: 200,
    minHeight: '100%',
    minWidth: '100%',
    position: 'absolute',
  },
})

export default avatarStyles;