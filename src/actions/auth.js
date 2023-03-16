import { auth, fbProvider, googleProvider } from '../utils/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

function register({ name, email, password, phone }) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, { displayName: name, phoneNumber: phone })
            console.log(user)
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
}

function googleLogin() {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(result.user));
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
    })
}

function facebookLogin() {
    signInWithPopup(auth, fbProvider)
    .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(result.user));
    }).catch((error) => {
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(credential)
    })
}

export { register, googleLogin, facebookLogin }