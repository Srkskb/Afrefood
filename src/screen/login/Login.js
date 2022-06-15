import { Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet }
  from 'react-native'
import React, { Component } from 'react'
const { width, height } = Dimensions.get("window");
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import styles from './styles'
import { Images } from "../../theme/index";
import {
  AppButton,
  LinkText,
  FloatingLabelInput,
} from '../../components/index';
import PhoneInput from "react-native-phone-number-input";

export default class Login extends Component {
  state = {
    show: false,
    eshow: false
  }
  componentDidMount() {
    this.setState({ show: false })
  }
  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Image
          source={require('../../images/james.jpg')}
          style={{ height: "100%", width: "100%" }}
        />
        {!this.state.show ? <View style={{
          width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start',
          padding: height * 0.04, position: 'absolute', backgroundColor: '#fdfdfd', bottom: 0
        }}>
          <Animatable.Text animation="slideInDown" style={{ fontSize: 24, color: '#121212', fontFamily: "Montserrat-SemiBold" }}>
            LOGIN
          </Animatable.Text>
          <Animatable.Text animation="slideInDown" style={{
            fontSize: 10, color: '#999',
            paddingTop: height * 0.01, fontWeight: '500', fontFamily: "Montserrat-SemiBold"
          }}>
            Enter your phone number to proceed
          </Animatable.Text>
          <Animatable.View animation="zoomInDown" style={{
            width: '100%', marginTop: height * 0.01,
            height: 50
          }}>
            <PhoneInput
              defaultCode="IN"
              containerStyle={{
                width: '100%', borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: '#E42217'
              }}
              textContainerStyle={{ width: '100%' }}
              textInputStyle={{ fontSize: 16, fontFamily: "Montserrat-Medium", color: '#121212' }}
              codeTextStyle={{ fontSize: 16, fontFamily: "Montserrat-Medium" }}
              disableArrowIcon
              layout="first"
              withDarkTheme={false}
              withShadow={false}
              autoFocus
            />
          </Animatable.View>
          <View style={{
            paddingTop: height * 0.02, width: '100%',
            alignSelf: 'center'
          }}>
            <Animatable.View animation="flipInX">
              <TouchableOpacity onPress={() => this.setState({ show: true })}
                style={{ borderRadius: 5, height: 44, backgroundColor: "#E42217", justifyContent: 'center' }}>
                <Text style={{
                  fontSize: 16, fontFamily: "Montserrat-Medium",
                  color: '#ffffff', textAlign: 'center', fontWeight: '500'
                }}>
                  Send OTP
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <View style={{
            paddingTop: height * 0.02, width: '100%',
            alignSelf: 'center'
          }}>
            <TouchableOpacity onPress={() => this.setState({ eshow: true })}
              style={{
                borderRadius: 5, height: 44, borderColor: "#E42217", justifyContent: 'center',
                borderWidth: 1
              }}>
              <Text style={{
                fontSize: 16, fontFamily: "Montserrat-Medium",
                color: '#E42217', textAlign: 'center', fontWeight: '500'
              }}>
                Login Using Email
              </Text>
            </TouchableOpacity>
          </View>
        </View> :
          <View style={{
            width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start',
            padding: height * 0.04, position: 'absolute', backgroundColor: '#fdfdfd', bottom: 0
          }}>
            <Animatable.Text animation="slideInDown" style={{ fontSize: 24, color: '#121212', fontFamily: "Montserrat-SemiBold" }}>
              WELCOME
            </Animatable.Text>
            <Animatable.Text animation="slideInDown" style={{
              fontSize: 10, color: '#999',
              paddingTop: height * 0.01, fontWeight: '500', fontFamily: "Montserrat-SemiBold"
            }}>
              An OTP have been sent to +91-XXXXXXXXXX
            </Animatable.Text>
            <View style={{
              paddingTop: height * 0.02, width: '100%', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'row'
            }}>
              <TextInput
                style={{
                  fontSize: 16, borderBottomWidth: 1, paddingHorizontal: 1, marginRight: 10
                  , borderBottomColor: '#E42217', fontFamily: "Montserrat-Medium"
                }}
                placeholder={''}
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={1}
              />
              <TextInput
                style={{
                  fontSize: 16, borderBottomWidth: 1, paddingHorizontal: 1, marginRight: 10
                  , borderBottomColor: '#E42217', fontFamily: "Montserrat-Medium"
                }}
                placeholder={''}
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={1}
              />
              <TextInput
                style={{
                  fontSize: 16, borderBottomWidth: 1, paddingHorizontal: 1, marginRight: 10
                  , borderBottomColor: '#E42217', fontFamily: "Montserrat-Medium"
                }}
                placeholder={''}
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={1}
              />
              <TextInput
                style={{
                  fontSize: 16, borderBottomWidth: 1, paddingHorizontal: 1, marginRight: 10
                  , borderBottomColor: '#E42217', fontFamily: "Montserrat-Medium"
                }}
                placeholder={''}
                placeholderTextColor={"#ccc"}
                keyboardType={'numeric'}
                maxLength={1}
              />
            </View>
            <View style={{
              paddingTop: height * 0.04, width: '100%',
              alignSelf: 'center'
            }}>
              <Animatable.View animation="flipInX">
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}
                  style={{ borderRadius: 5, height: 44, backgroundColor: "#E42217", justifyContent: 'center' }}>
                  <Text style={{
                    fontSize: 16, fontFamily: "Montserrat-Medium",
                    color: '#ffffff', textAlign: 'center', fontWeight: '500'
                  }}>
                    Enter OTP
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>

          </View>
        }
        {this.state.eshow ? <View style={{
          width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start',
          padding: height * 0.04, position: 'absolute', backgroundColor: '#fdfdfd', bottom: 0, zIndex: 100
        }}>
          <TouchableOpacity onPress={() => this.setState({ show: false, eshow: false })}
            style={{ justifyContent: 'center' }}>
            <Text style={{
              fontSize: 16, fontFamily: "Montserrat-Medium",
              color: '#E42217', textAlign: 'center', fontWeight: '500'
            }}>
              Go Back
            </Text>
          </TouchableOpacity>

          <Animatable.Text animation="slideInDown" style={{ fontSize: 24, color: '#121212', fontFamily: "Montserrat-SemiBold" }}>
            LOGIN WITH EMAIL
          </Animatable.Text>
          <Animatable.Text animation="slideInDown" style={{
            fontSize: 10, color: '#999',
            paddingTop: height * 0.01, fontWeight: '500', fontFamily: "Montserrat-SemiBold"
          }}>
            Enter your Email to proceed
          </Animatable.Text>
          <Animatable.View animation="zoomInDown" style={{
            paddingTop: height * 0.02, width: '100%',
            alignSelf: 'center'
          }}>
            <TextInput
              style={{
                fontSize: 16, borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: 12
                , borderBottomColor: '#E42217', fontFamily: "Montserrat-Medium"
              }}
              placeholder={'Email'}
              placeholderTextColor={"#ccc"}
            />
          </Animatable.View>
          <Animatable.View animation="zoomInDown" style={{
            paddingTop: height * 0.02, width: '100%',
            alignSelf: 'center'
          }}>
            <TextInput
              style={{
                fontSize: 16, borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: 12
                , borderBottomColor: '#E42217', fontFamily: "Montserrat-Medium"
              }}
              placeholder={'Password'}
              placeholderTextColor={"#ccc"}
            />
          </Animatable.View>
          <View style={{ paddingTop: height * 0.04, width: '100%', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}
              style={{
                borderRadius: 5, height: 44, borderColor: "#E42217", justifyContent: 'center',
                borderWidth: 1
              }}>
              <Text style={{
                fontSize: 16, fontFamily: "Montserrat-Medium",
                color: '#E42217', textAlign: 'center', fontWeight: '500'
              }}>
                Login Using Email
              </Text>
            </TouchableOpacity>
          </View>
        </View> : null}
      </View>
    )
  }
}