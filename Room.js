
//ADD YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCDFKbf7N_cqgLK_n2-n1bt3yU8Z99D6tg",
    authDomain: "chatroom-d0ad3.firebaseapp.com",
    databaseURL: "https://chatroom-d0ad3-default-rtdb.firebaseio.com",
    projectId: "chatroom-d0ad3",
    storageBucket: "chatroom-d0ad3.appspot.com",
    messagingSenderId: "185508621873",
    appId: "1:185508621873:web:8c94bd85e4250a8b5e6f10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
