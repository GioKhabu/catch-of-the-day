import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOrinDl-e7wc8N-2Ww1BLEEzM4iJztmlE",
  authDomain: "catch-of-the-day-giokhabu.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-giokhabu-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export { firebaseApp };
// this is a default export
export default base;