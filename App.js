var app = new Vue({
  el: "#app",
  data: {
    msg: "Hi",
  },
  watch: {
    msg: function (newMsg, oldMsg) {
        console.log(`${oldMsg} >> ${newMsg}`);

    }
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