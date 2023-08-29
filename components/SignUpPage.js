import { ImageBackground, StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'mydb',
        location: 'default',
    }
)

const SignUpPage = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");



    return (
        <View style={styles.container}>
            <Image source={require('../assets/signup_background.jpg')} style={styles.image} />
            <KeyboardAvoidingView style={styles.signupContainer} behavior='padding'>
                <Image source={require('../assets/wmba_logo.png')} style={{ marginLeft: 'auto', marginRight: 'auto', width: 80, height: 80, marginTop: 30 }} />
                <Text style={styles.header}>
                    WMBA SIGN UP
                </Text>
                <View style={styles.signupField}>
                    <Text style={styles.subheader}>
                        Username
                    </Text>
                    <TextInput
                        style={styles.loginText}
                        value={username}
                        onChangeText={setUsername}
                        returnKeyType="done"
                    />
                </View>
                <View style={styles.signupField}>
                    <Text style={styles.subheader}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.loginText}
                        value={email}
                        onChangeText={setEmail}
                        returnKeyType="done"

                    />
                </View>
                <View style={styles.signupField}>
                    <Text style={styles.subheader}>
                        Phone Number
                    </Text>
                    <TextInput
                        style={styles.loginText}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType={'phone-pad'}
                        returnKeyType="done"
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}

                >
                    <Text
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            fontWeight: 'bold'
                        }}
                    >
                        Create Account
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
    /*
    return (
        <View style = {{
            flex: 1,
        }}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Image source={require('../assets/wmba_logo.png')} />
                <Text style={styles.header}>
                    SIGN UP
                </Text>
                
            </ImageBackground>
        </View>
    )*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    signupContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: '25%',
        top: -100
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        color: 'black'
    },
    signupField: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    loginText: {
        borderStyle: "solid",
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 7,
        borderColor: "#e6e6e6",
        marginBottom: 10,
        padding: 10

    },
    subheader: {
        fontWeight: "bold",
        marginBottom: 5
    },
    buttonStyle: {
        backgroundColor: 'orange',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        borderRadius: 7,
        padding: 10
    }

})

const stylesRand = StyleSheet.create({

    image: {
        flex: 1,
        justifyContent: 'center',
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
export default SignUpPage;