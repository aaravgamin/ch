const firebaseConfig = {
    apiKey: "AIzaSyCbW6m5HU8EP60mmftV4qwKKP7-MqgfTSU",
    authDomain: "chst-7abc7.firebaseapp.com",
    databaseURL: "https://chst-7abc7-default-rtdb.firebaseio.com",
    projectId: "chst-7abc7",
    storageBucket: "chst-7abc7.appspot.com",
    messagingSenderId: "742144512611",
    appId: "1:742144512611:web:a176ddfeede5987cbb5e56",
    measurementId: "G-T2FN3MXRT1"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

   function addRoom()
   {
         room_name = document.getElementById("room_name").Value;
         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });

         localStorage.setItem("room_name", room_name);

         window.location = "chat_room.html";
   }
   
   console.log("Room Name -" + Room_names);

   row = "<div class='room_name' id="+Room_names+" onclick='redirectTo RoomName(this.id)' >#"+Room_names +"</div><hr>";

   document.getElementById("output").innerHTML += row;
   
   function redirectToRoomName(name)
   {
         console.log(name);
         localStorage.setItem("room_name", room_name);
         window.location = "chat_room.html";
   }

   });
     });}
getData();
