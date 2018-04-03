import React from 'react';

import { View, Text, Animated, Keyboard } from 'react-native';
import {
  SocialIcon,
  Divider,
  FormInput,
  FormLabel,
  Button,
} from 'react-native-elements';
import styles from './styles';
import COLORS from '../../utils/Theme';
import Style from '../../utils/Style';

class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    header: null,
    /*   title: 'Login',
    headerStyle: {
      backgroundColor: COLORS.PRIMARY,
    },
    headerTitleStyle: {
      color: '#fff',
      fontWeight: '900',
    }, */
  });
  constructor(props) {
    super(props);
    this.keyboardOpened = new Animated.Value(1);
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide,
    );
  }
  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  keyboardWillShow = () => {
    Animated.timing(this.keyboardOpened, {
      duration: 200,
      toValue: 0.7,
    }).start();
  };

  keyboardWillHide = () => {
    Animated.timing(this.keyboardOpened, {
      duration: 200,
      toValue: 1,
    }).start();
  };
  render() {
    const yPositionLogin = this.keyboardOpened.interpolate({
      inputRange: [0.5, 1],
      outputRange: [-Style.DEVICE_HEIGHT / 3.2, 0],
    });
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Animated.View
          style={[
            styles.containerLogin,
            {
              transform: [{ translateY: yPositionLogin }],
            },
          ]}
        >
          <Text style={styles.signText}>Sign In</Text>
          <View style={styles.socialIcons}>
            <SocialIcon type="facebook" />
            <SocialIcon type="twitter" />
            <SocialIcon type="google-plus-official" />
          </View>
          <View style={styles.linhaOU}>
            <Divider style={[styles.divider, styles.dividerRigth]} />
            <Text>OU</Text>
            <Divider style={[styles.divider, styles.dividerLeft]} />
          </View>
          <View>
            <FormLabel>Email</FormLabel>
            <FormInput
              returnKeyType="next"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
            />
            <FormLabel>Senha</FormLabel>
            <FormInput
              ref={(input) => {
                this.secondTextInput = input;
              }}
            />
          </View>
          <Text style={styles.recuperarSenha}>Esqueceu a senha?</Text>
          <Button
            title="ENTRAR"
            backgroundColor={COLORS.PRIMARY}
            rounded
            fontSize={Style.FONT_SIZE_TITLE}
          />
        </Animated.View>
      </View>
    );
  }
}

export default HomeScreen;
