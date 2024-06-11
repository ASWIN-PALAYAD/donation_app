import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import { updateToken } from '../redux/reducers/User';


// user signup
export const createUser = async(fullName,email,password) => {
    try {
        const user = await auth().createUserWithEmailAndPassword(email,password);
        await user.user.updateProfile({displayName:fullName});
        console.log(user);
        return user;
    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            console.log('Email is already used');
            return {error:"The Email is already in use"};
        }else if(error.code === 'auth/invalid-email'){
            console.log('Email is invalid');
            return {error:"Please Enter a valid Email address"};
        }
        console.log(error);
        return  {error:"Something went wrong your Register request"}
        
    }
};


//user login
export const loginUser  = async (email,password) => {
    try {
        const response = await auth().signInWithEmailAndPassword(email,password);
        const token = await response.user.getIdToken();
        return {
            status:true,
            data:{
                displayName:response.user.displayName,
                email:response.user.email,
                token
            }
        }
    } catch (error) {
        if(error.code === 'auth/wrong-password'){
            return {status:false, error:'Invalid credential..please try again'};
        }else if(error.code === 'auth/user-not-found'){
            return {status:false, error:'The email you entered does not exist, Please create a new account'};
        }else if(error.code === 'auth/invalid-email'){
            return {status:false, error:'Please enter a valide email id'};
        }else if(error.code === 'auth/invalid-credential'){
            return {status:false, error:'Invalid credential..please try again'};
        }
        console.log(error);
        return {status:false, error:error.message}
    }
};

//user logout
export const logout = async() => {
    await auth().signOut();
}

//refresh token
export const checkToken = async()=> {
    try {
        let response = await auth().currentUser.getIdToken(true);
        console.log('we are updationg token for you');
        store.dispatch(updateToken(response))
        return response;
    } catch (error) {
        return error
    }
}
