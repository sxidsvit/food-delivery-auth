import { setGlobal } from 'jest-util';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from '../'
import { FormInput } from '../../components'
import { utils } from '../../utils'

import { FONTS, SIZES, COLORS, icons } from '../../constants'

const SignIn = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState('')

    const [showPass, setShowPass] = React.useState(false)

    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle='Welcome back, you have been missed'
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Form input  */}
                <FormInput
                    label='Email'
                    keyboardType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{ justifyContent: 'center' }}
                        >
                            <Image
                                source={email == '' || (email != '' && emailError == '') ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == ''
                                        ? COLORS.gray
                                        : (email != '' && emailError == '')
                                            ? COLORS.green
                                            : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label='Password'
                    secureTextEntry={!showPass}
                    autoCompleteType='password'
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setPassword(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.green
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Save me & Fogot Password  */}

                {/* Sign In  */}

                {/* Sign Up  */}

            </View>
        </AuthLayout>
    )
}

export default SignIn;