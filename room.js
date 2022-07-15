var firebaseConfig = {
    apiKey: "AIzaSyAu9gz-P19wbXxiLhTFvlzeywpKpcd7AD4",
    authDomain: "kwitter-4f092.firebaseapp.com",
    databaseURL: "https://kwitter-4f092-default-rtdb.firebaseio.com",
    projectId: "kwitter-4f092",
    storageBucket: "kwitter-4f092.appspot.com",
    messagingSenderId: "848445906330",
    appId: "1:848445906330:web:dc2a74e58c921603d8ee23"
  };
  firebase.initializeApp(firebaseConfig);

   User_name = localStorage.getItem("User_Name");
   console.log(User_name);
   document.getElementById("user_hello").innerHTML = "Hello " + User_name +"!";

function addRoom(){
      room_name = document.getElementById("room_name_inp").value;
      localStorage.setItem("Room_Name" , room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
     
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("Room_Name" , name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Room_Name");
      localStorage.removeItem("User_Name");
      window.location = "index.html";
}
