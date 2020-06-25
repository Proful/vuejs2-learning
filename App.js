Vue.component("Hi", {
    props: ['name'],
    template: "<p>Hi {{ name }}</p>",
});

var app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue',
        tip: 'something',
        toggle: false,
        alphabets: ["a", "b", "c"],
        name: "Steve"
    },
    methods: {
        onToggle: function () {
            this.toggle = ! this.toggle
        }
    }
});