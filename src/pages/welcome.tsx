import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';

import colors from '../styles/colors';

export function Welcome(){
    const [visible, setVisible] = useState(false);

    function handleVisible(){
        setVisible(true);
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                 suas plantas {'\n'}
                 de forma fácil
            </Text>

            
            <Image style={styles.image} source={wateringImg} />
            

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title='>' />
            {/* <Button title='Mostrar imagem' onPress={handleVisible}/> */}
            {/* <Button title='Ocultar imagem' onPress={handleVisible}/> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10
    },
    image: {
        width: 292,
        height: 284
    },
    buttonText: {
         color: colors.white,
         fontSize: 24
    }
})