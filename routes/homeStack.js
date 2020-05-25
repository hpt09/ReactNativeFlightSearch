import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../screens/HomeScreen'
import Results from '../screens/Results'
import ReturnResults from '../screens/ReturnResults'
import Login from '../screens/Login'
import Signup from '../screens/signup'

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
    Results: {
        screen: Results
    },
    ReturnResults: {
        screen: ReturnResults
    },
    SignUp: {
        screen: Signup
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
