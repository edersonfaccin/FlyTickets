import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ImageBackground, View, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, connect } from 'react-redux'
import ButtonStart from '../components/buttons/ButtonStart'
import { IIntroduce, introduceDefault, introduceSchema } from '../models/introduceSchema'
import Default from '../styles/Default'
import { translate } from '../util/Common'
import InputText from '../components/inputs/InputText'
import { IStore } from '../util/Interfaces'
import { setName } from '../redux/appActions'

const Initial = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [ introduce, setIntroduce ] = useState<IIntroduce>({ ...introduceDefault })

    const onSubmit = async(values: IIntroduce, { resetForm }) => {
        const { name } = values

        formik.setSubmitting(true)

        if(dispatch) dispatch(setName(name))

        navigation.navigate('SearchTickets' as never)
        //TODO
        resetForm()
        formik.setSubmitting(false)
    }

    const formik = useFormik({
        enableReinitialize: true,
        validateOnMount: false,
        initialValues: introduce,
        validationSchema: introduceSchema,
        validateOnChange: true,
        onSubmit: onSubmit
    });

    return (
        <LinearGradient colors={['#285C8B','#092034']} style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/images/background.jpeg')} 
                style={Default.safeArea} imageStyle={{ opacity: 0.8 }}>
                <View style={styles.viewData}>
                    <InputText 
                        maxLength={35}
                        label={translate('name')} 
                        value={formik.values.name} 
                        onBlur={formik.handleBlur('name')}
                        onChange={val => formik.setFieldValue('name', val)}
                        errorMessage={formik.errors.name}
                        showError={formik.errors.name && formik.touched.name}
                    />
                    <ButtonStart
                        title={translate('searchTickets')} 
                        onPress={formik.handleSubmit}
                    />
                </View>
            </ImageBackground>
        </LinearGradient>
    )
}

export default connect((store: IStore) => ({ 
    name: store.name
}))(Initial)

const styles = StyleSheet.create({
    viewData: {
        width: Dimensions.get('window').width * 0.98,
        height: Dimensions.get('window').height * 0.5,
        justifyContent: 'center',
        alignSelf: 'baseline',
        alignItems: 'center',
        top: '25%',
        alignContent: 'flex-end'
    }
})