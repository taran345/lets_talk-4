//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCOh16NRd-lawbjRhAY78dMtjeSfXqD2AI",
    authDomain: "kwitter-53648.firebaseapp.com",
    databaseURL: "https://kwitter-53648-default-rtdb.firebaseio.com",
    projectId: "kwitter-53648",
    storageBucket: "kwitter-53648.appspot.com",
    messagingSenderId: "933273644079",
    appId: "1:933273644079:web:7901c12366a934c5d72ada"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


 room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
    like:0
    });
    document.getElementById("output").value="";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

