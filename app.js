// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    push,
    onChildAdded,
    onValue,
 remove 
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {
    getAuth,
    
    signOut 
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDatnI8nav_NOrInzeboRxGy7E6rHNYmag",
    authDomain: "hiiii-e5103.firebaseapp.com",
    projectId: "hiiii-e5103",
    storageBucket: "hiiii-e5103.appspot.com",
    messagingSenderId: "268557311354",
    appId: "1:268557311354:web:35fd7a25c5499a2b90cac3",
    measurementId: "G-N9GSZ14SL1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();

var inp = document.getElementById("task")

window.sendtodo = function () {
    var obj = {
        task: inp.value,
        date: JSON.stringify(new Date())
    };
    const keyRef = ref(database, 'todo')
    obj.id=push(keyRef).key;
    const refrences = ref(database, `todo/${obj.id}/`);



    set(refrences,obj)
        console.log(obj.id)
        console.log(obj)


}
var list = []
var editid;

function renderData(){
    const refrences = ref(database, `todo/`);
    var parent = document.getElementById('parent')
    parent.innerHTML = "";
    for(var i=0;  i<list.length; i++){
        parent.innerHTML += `<li id="li" ><span class="task"> ${list[i].task}</span></br><span class='chip'>${list[i].date}<button onclick="delTask()" class="delete">Delete</button><button onclick="editTodo()" class="delete">Edit</button></span></li></br></br>`;
    }
}

 

window.getdata = function () {

  onValue(ref(database, '/todo /'), (snapshot) => {
    console.log(snapshot.val())
  
  });


  const taskRef =ref(database,'todo/');
  onChildAdded(taskRef, function(data){
   list.push(data.val());
      console.log(data.val());
      renderData();
  })
 
};
window.delTask = function (){
    remove(ref(database , "todo/"))
    .then(() => {
        alert("Todo sucessfully deleted")
    })
    .catch((error) => {
        alert("error"+ error)
    })
    event.target.parentNode.parentNode.
    remove()
}

window.logout = function(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log(auth)
  alert('Sign-out successful.')
  window.location.replace('login.html')
}).catch((error) => {
  // An error happened.
  console.log(error)
});
}                
window.editTodo = function(task , id ){
console.log(task , id);
inp.value = task;
 editid = id
}





 
