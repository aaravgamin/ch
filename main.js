// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyCbW6m5HU8EP60mmftV4qwKKP7-MqgfTSU",
    authDomain: "chst-7abc7.firebaseapp.com",
    databaseURL: "https://chst-7abc7-default-rtdb.firebaseio.com",
    projectId: "chst-7abc7",
    storageBucket: "chst-7abc7.appspot.com",
    messagingSenderId: "742144512611",
    appId: "1:742144512611:web:a176ddfeede5987cbb5e56",
    measurementId: "G-T2FN3MXRT1"
  };


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



