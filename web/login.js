

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBc-AtlK1-YB2kpCEK7umksiZ0lr4lsjhs",
    authDomain: "personality-prediction-159a1.firebaseapp.com",
    projectId: "personality-prediction-159a1",
    storageBucket: "personality-prediction-159a1.appspot.com",
    messagingSenderId: "11977241851",
    appId: "1:11977241851:web:9f9552be2fb0309f2eac5e",
    measurementId: "G-ECR3NC4459"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



//Recruiter Login

//Authentication - Firebase - Login 
const auth = firebase.auth();

document.getElementById("signinForm").addEventListener('submit', login);

function login(){
  console.log("0");
    var loginID = document.getElementById("loginID").value;
    var loginPass = document.getElementById("loginPass").value;

    firebase.auth().signInWithEmailAndPassword(loginID, loginPass)
          .then((userCredential) => {
            // Signed in
                window.location.assign("data.html");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
}

$("#signinForm").submit(function(e) {
    e.preventDefault();
  });