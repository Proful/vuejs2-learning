var emp = { name: "Steve", age: 23, changes: []}

var app = new Vue({
    el: "#app",
    data: emp
})

// emp.name = "James"
// app.name = "Rick"

app.$watch("name", function(n,old) {
    console.log(old + " > " + n)
})