var emp = { name: "Steve", age: 23, changes: []}

var app = new Vue({
    el: "#app",
    data: emp,
    created: function () {
        console.log("created");
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    },
    destroyed: function () {
        console.log("destroyed");
    },
})