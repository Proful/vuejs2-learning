var app = new Vue({
    el: "#app",
    data: {
        name: "Steve",
        empId: 101,
        age: 27,
        isButtonDisabled: true,
        role:'<span style="color: tomato">Developer</span>'
    }
})

app.name = "James"