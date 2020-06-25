var app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue',
        tip: 'something',
        toggle: false,
        alphabets: ["a", "b", "c"]
    },
    methods: {
        onToggle: function () {
            this.toggle = ! this.toggle
        }
    }
});