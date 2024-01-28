


function addUser() {
    user_name = document.getElementById("user_name").value;
window.location="room.html"
    localStorage.setItem("user_name",user_name);
}