Vue.component("Hi", {
  template: "<p>Hi there...</p>",
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