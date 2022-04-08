import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements' 
import { validateEmail } from '../../utils/validation'
import firebase from "firebase"
import { useNavigation } from "@react-navigation/native"

export default function RegisterForm(props){
    const{toastRef}= props
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPasssword, setShowRepeatPassword ] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit = () => {
        if(formData.email.length===0||formData.password.length===0||formData.repeatPassword.length===0){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empity',
                text2: 'Es necesario que todos los campos sea chokollenados',
                visibilityTime:3000
            })
        } else if (!validateEmail(formData.email)){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Password',
                text2: 'Tu chokoemail no es correcto',
                visibilityTime:3000
            })
        } else if (formData.password !== formData.repeatPassword){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Password',
                text2: 'Ups tu contraseña no es identica',
                visibilityTime:3000
            })
        }else if (formData.password.length <6){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'password',
                text2: 'Minimo 6 caracteres, como tus calificaciones',
                visibilityTime:3000
            }) 
        } else{
            firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response)=>{
            navigation.navigate('account')
        })
        .catch(()=>{
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Cuenta',
                text2: '¡Muy bien! Ya has sido registrado',
                visibilityTime:3000
            })
        })
        }
    }


    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
               placeholder='Correo electronico'
               containerStyle={styles.inputForm}
               onChange={(e)=>onChange(e, 'email') }
               rightIcon={<Icon type='material-community' name='at' iconStyle={styles.iconRight} />}
            />
            <Input
               placeholder='Contraseña'
               containerStyle={styles.inputForm}
               onChange={(e)=>onChange(e, 'password') }
               password={true}
               secureTextEntry={ showPassword ? false : true}
               rightIcon={<Icon 
                type='material-community' 
                name={ showPassword ? 'eye-off-outline' : 'eye-outline'}
                iconStyle={styles.iconRight}
                onPress={()=> setShowPassword(!showPassword)}
            />}
            />
            <Input
               placeholder='Repetir contraseña'
               containerStyle={styles.inputForm}
               onChange={(e)=>onChange(e, 'repeatPassword') }
               password={true}
               secureTextEntry={ showRepeatPasssword ? false : true}
               rightIcon={<Icon 
                type='material-community' 
                name={ showRepeatPasssword ? 'eye-off-outline' : 'eye-outline'}
                iconStyle={styles.iconRight}
                onPress={()=> setShowRepeatPassword(!showRepeatPasssword)}
            />}
            />
           <Button
                title='Guardar datos'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    inputForm:{
        width:'100%',
        marginTop:20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '95%'
    },
    btnRegister:{
        backgroundColor: '#9E521A'
    },
    iconRight:{
        color:'#c1c1c1'
    }
})