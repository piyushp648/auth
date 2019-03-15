import React, { Component } from 'react';
import { View} from "react-native";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from './components/LoginForm';
import firebase from '@firebase/app';
class App extends Component {

    state = {
        loggedIn: null,
    }

    initializeFirebase() {
        var config = {
            apiKey: 'AIzaSyAaB8H5gLOvVtJPopZblMMQrnLMnKclcGg',
            authDomain: 'auth-ed03b.firebaseapp.com',
            databaseURL: 'https://auth-ed03b.firebaseio.com',
            projectId: 'auth-ed03b',
            storageBucket: 'auth-ed03b.appspot.com',
            messagingSenderId: '130365707128'
        };

        firebase.initializeApp(config);
    }

    componentWillMount() {
        this.initializeFirebase();
        require('firebase/auth');
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn:true });
            } else {
                this.setState({ loggedIn:false });
            }
        })
    }

    render() {
        return (
            <View>
            <Header headerText='Authentication'></Header>
            {this.renderContent()}
            </View>
        );
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button
                        onPress={() => firebase.auth().signOut()}
                        >
                            Log out
                        </Button>
                    </CardSection>
                );
           
            
            case false:
                return <LoginForm />
            
        
            default:
                return (
                    <View style = {styles.spinnerContainer}>
                    <Spinner size="large" /> 
                    </View>
                );
            
        }
    }
}
 
const styles = {
    spinnerContainer: {
        flex: 1,
        marginTop:240,
        justifyContent: 'center',
        alignItems:'center'
    }
}

export default App;