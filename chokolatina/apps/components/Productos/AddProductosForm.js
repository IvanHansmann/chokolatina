import React, { useState, useEffect} from "react";
import { Alert, StyleSheet, Text, View, ScrollView, Dimensions} from "react-native"
import { Avatar, Button, Icon, Input, Image } from "react-native-elements";
import CountryPicker from "react-native-country-picker-modal"
import {map, size, filter, isEmpty} from "lodash"
import { loadImageFromGallery } from "../../utils/helpers";
import { useNavigation } from "@react-navigation/native";

const widthScreen = Dimensions.get("window").width


export default function AddProductosForm(props){
    const [formData , setFormData] = useState(defaultFormValues())
    const {toastRef} = props
    const {setLoading} = props
    const navigation = useNavigation()
    const [documentSelected , setDocumentSelected] = useState([])  
    const [isVisibleMap , setIsVisibleMap] = useState(false)  

    const  addProductos= () => {
    }
    
    return(
        <ScrollView >
            <ImageDocument
                imageDocument={documentSelected[0]}
            />
            <Addform
                formData={formData}
                setFormData={setFormData}
                setIsVisibleMap={setIsVisibleMap}            
            />
            <UploadDocument
                toastRef={toastRef}
                documentSelected={documentSelected}
                setDocumentSelected={setDocumentSelected}
            />
            <Button
                title="Agregar nuevo producto"
                onPress={addProductos}
                buttonStyle={styles.btnAddTramite}
            />
        </ScrollView>
    )
}

function ImageDocument({imageDocument}){
    return(
        <View style={styles.viewPhoto}>
            <Image
                style={{width: widthScreen, height: 200}}
                source={
                    imageDocument ? {uri: imageDocument} 
                    : require('../../../assets/img/avatar-default.jpg')}
            
            />
        </View>
    )
}

function UploadDocument({toastRef, documentSelected, setDocumentSelected}) {
    const documentSelect = async() => {
        const response = await loadImageFromGallery([4,3])
        if (!response.status){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empty',
                text2: 'Todavia no ha seleccionado una imagen',
                visibilityTime: 3000
            });
            return
        }
        setDocumentSelected([...documentSelected, response.image])
    }

    const removeDocument = (image) => {
        Alert.alert(
            "Eliminar imagen",
            "¿Quiere eliminar esta imagen?",
            [
                {
                    text: "No",
                    style:"cancel"
                },
                {
                    text: "Si",
                    onPress: () => {
                    setDocumentSelected(
                    filter(documentSelected, (imageUrl) => imageUrl !== image)
                    )}
                }
            ], {cancelable : false}
        )
    }

    return(
        <ScrollView
        horizontal
        style={styles.viewImage}
        >
            {
                size(documentSelected) < 10 && (
                <Icon
                type="material-community"
                name="camera"
                color="#7a7a7a"
                containerStyle={styles.containerIcon}
                onPress={documentSelect}
                />
                )
            }
            
            {
            map(documentSelected, (imageDocument, index) => (
                <Avatar
                    key={index}
                    style={styles.miniature}
                    source={{uri: imageDocument}}
                    onPress={()=> removeDocument(imageDocument)}
                />
            ))
            }
        </ScrollView>
    )
}

function Addform({setFormData, formData}){
    const [country , setCountry] = useState("MX")
    const [callingCode , setCallingCode] = useState("+52")
    const [phone , setPhone] = useState("")

    const onChange = (e, type) => {
        setFormData({...formData, [type] : e.nativeEvent.text})
    }

    return(
        <View style={styles.viewForm}>
            <Input
                placeholder="Nombre del producto"
                defaultValue={formData.name}
                onChange={(e)=>onChange(e, 'name')}
            />
            <Input
                placeholder="Marca"
                defaultValue={formData.marca}
                onChange={(e)=>onChange(e, 'marca')}
            />
            <Input
                placeholder="Precio"
                defaultValue={formData.precio}
                onChange={(e)=>onChange(e, 'precio')}
            />
            <Input
                KeyboardType="email-address"
                placeholder="Email de la empresa"
                defaultValue={formData.email}
                onChange={(e)=>onChange(e, 'email')}
            />
            <View style={styles.phoneView}>
                <CountryPicker
                    withFlag
                    withCallingCodeButton
                    withFilter
                    withCallingCode
                    containerStyle={styles.countryPicker}
                    countryCode={country}
                    onSelect={(country)=>{
                        setFormData({...formData, 
                        "country": country.cca2, 
                        "callingCode": country.callingCode[0] })
                    }}
                />
                <Input
                    placeholder="Contacto de la empresa"
                    keyboardType='phone-pad'
                    containerStyle={styles.inputPhone}
                    defaultValue={formData.phone}
                    onChange={(e)=>onChange(e, 'phone')}
                />
            </View>
            <Input
                    placeholder="Descripcion"
                    multiline
                    containerStyle={styles.textArea}
                    defaultValue={formData.description}
                    onChange={(e)=>onChange(e, 'description')}
                />
        </View>    
    )
}


function defaultFormValues(){
    return{
        name: '',
        description: '',
        email: "",
        phone: "",
        marca: '',
        precio: '',
        country: 'MX',
        callingCode: "+52"
    }
}

const styles = StyleSheet.create({
    viewContainer:{
        height: "100%"
    },
    viewForm:{
        marginHorizontal: 10
    },
    textArea:{
        height: 100,
        width: "100%"
    },
    phoneView:{
        width: "80%",
        flexDirection: 'row'
    },
    inputPhone:{
        width: "80%"
    },
    btnAddTramite:{
        margin: 20,
        backgroundColor: "#9E521A"
    },
    viewImage:{
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30
    },
    containerIcon:{
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        height: 70,
        width: 70
    },
    miniature:{
        height: 70,
        marginRight: 10,
        width: 70  
    },
    viewPhoto:{
        alignItems: "center",
        height: 200,
        marginBottom: 20
    }
})