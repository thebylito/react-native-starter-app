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
  },
});

export default styles;
