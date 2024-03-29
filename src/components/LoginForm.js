import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from '@firebase/app';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const {email, password} = this.state;
        require('firebase/auth');

        this.setState({ error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({
            error: "Authentication Failed.",
            loading: false
        })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small"/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
            Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        placeholder="john_doe@gmail.com"
                    />
                </CardSection>

                <CardSection >
                    <Input
                        placeholder="********"
                        value={this.state.password}
                        label="Password"
                        onChangeText={password => this.setState({password})}
                        secureTextEntry /**or use secureTextEntry={true} defined=true, undefined=false */
                    />

                </CardSection>

                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;