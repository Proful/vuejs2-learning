var app = new Vue({
    el: "#app",
    data: {
        msg: "Hi"
    },
    computed: {
        upperMsg: function () {
            return this.msg.toUpperCase()
        }
    }
})

app.name = "James"