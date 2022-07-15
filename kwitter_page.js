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
 user_name = localStorage.getItem("User_Name");
 room_name = localStorage.getItem("Room_Name");

  function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        Name : user_name , 
        Message : msg ,
        Like : 0
    });
    document.getElementById("output").value = "";
  }
  
  
  
  function logout(){
    localStorage.removeItem("User_Name");
    localStorage.removeItem("Room_Name");
    window.location = "index.html";

}