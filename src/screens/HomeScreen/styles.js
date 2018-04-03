import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Theme';
import Style from '../../utils/Style';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    flex: 1,
    padding: Style.PADDING,
  },
  containerLogin: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    width: Style.CARD_WIDTH,
    padding: Style.PADDING,
    marginTop: Style.DEVICE_HEIGHT / 5,
    borderColor: COLORS.GRAY,
    borderWidth: 0.7,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linhaOU: {
    flexDirection: 'row',
    // width: Style.CARD_WIDTH,
    marginVertical: 20,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  divider: {
    // borderWidth: 0.05,
    width: '30%',
  },
  dividerRigth: { marginRight: 10 },
  dividerLeft: { marginLeft: 10 },
  header: {
    backgroundColor: COLORS.PRIMARY,
    width: Style.DEVICE_WIDTH,
    height: Style.CARD_WIDTH * 1.1,
    position: 'absolute',
    top: -Style.CARD_WIDTH / 3,
    borderBottomLeftRadius: Style.CARD_WIDTH / 10,
    borderBottomRightRadius: Style.CARD_WIDTH / 8,
  },
  recuperarSenha: {
    fontSize: Style.FONT_SIZE_SMALL,
    color: COLORS.PRIMARY,
    alignSelf: 'center',
    marginVertical: 15,
  },
  signText: {
    fontSize: Style.FONT_SIZE_TITLE,
    color: COLORS.PRIMARY,
    alignSelf: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
});

export default styles;
