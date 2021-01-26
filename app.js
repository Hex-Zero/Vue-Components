const app = Vue.createApp({
  data() {
    return {
      Name: 32,
    };
  },
  methods: {
    handleEvent(event) {
      console.log(event);
    },
  },
});

app.mount("#app");
