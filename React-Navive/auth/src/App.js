import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/loginForm';


class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBlCOZ2GjQySN1S8Z6q85SWw_wXoLkI0lA',
            authDomain: 'authentication-d2239.firebaseapp.com',
            databaseURL: 'https://authentication-d2239.firebaseio.com',
            projectId: 'authentication-d2239',
            storageBucket: 'authentication-d2239.appspot.com',
            messagingSenderId: '706551966476',
            appId: '1:706551966476:web:4ee1d54acf172a30'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out 
                            </Button>
                        </CardSection>
                    </Card>
                    
                );
            case false:
                return <LoginForm />;
            default: 
                return <Spinner size="large" />;
        }
    }
      
        

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}


export default App;