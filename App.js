var app = new Vue({
  el: "#app",
  data: {
    msg: "Hi",
  },
  computed: {
    upperMsg: {
      get: function () {
        return this.msg.toUpperCase();
      },
      set: function (newValue) {
        this.msg = newValue.toLowerCase();
      },
    },
  }
});