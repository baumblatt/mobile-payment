import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import Timestamp = admin.firestore.Timestamp;

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

export const welcome = functions.auth.user().onCreate((user, context) => {
    const {uid, displayName, email, photoURL} = user;
    return firestore.doc(`accounts/${uid}`).set({uid, displayName, email, photoURL, balance: 200, timestamp: Timestamp.now()});
});
