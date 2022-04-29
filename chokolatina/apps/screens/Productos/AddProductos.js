import React, { useRef, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message'

import { useNavigation } from '@react-navigation/native'

import Loading from "../../components/Loading"
import AddProductosForm from "../../components/Productos/AddProductosForm"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  
export default function AddProductos(){
    const navigation = useNavigation()
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)
    return (
      <KeyboardAwareScrollView>
      <AddProductosForm
          toastRef={toastRef}
          setLoading={setLoading}
          navigation={navigation}
      />
      <Loading isVisible={loading} text="Agregando producto.." />
      <Toast ref={toastRef} position='center' opacity={0-9}/>
  </KeyboardAwareScrollView>
    )
  }


const styles = StyleSheet.create({})