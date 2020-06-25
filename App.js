var emp = { name: "Steve", age: 23}

var app = new Vue({
    el: "#app",
    data: emp
})

emp.name = "James"
app.name = "Rick"