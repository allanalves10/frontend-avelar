import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Logged from './pages/logged';

export const SignedOutRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Entrar"
        }
    },
});

export const SignedInRoutes = createStackNavigator({
    Logged: {
        screen: Logged,
        navigationOptions: {
            title: "Meu perfil"
        }
    },
});
// src/index.js

import React from 'react';
import { View } from 'react-native';

import { SignedOutRoutes, SignedInRoutes } from './routes';

export default class App extends React.Component {
    render() {
        return <SignedOutRoutes / >
    }
}

import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Logged from './pages/logged';

export const SignedOutRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Entrar"
        }
    },
});

export const SignedInRoutes = createStackNavigator({
    Logged: {
        screen: Logged,
        navigationOptions: {
            title: "Meu perfil"
        }
    },
});

export const createRootNavigator = (signedIn = false) => {
    return createStackNavigator({
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes }
    }, {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut",
        navigationOptions: {
            gesturesEnabled: false
        }
    });
};