const app = Vue.createApp({
  data() {
    return {
      Name: 32,
      boxOn: false,
    };
  },
  methods: {
    handleEvent(event) {
      console.log(event);
    },
    handleBoxClick() {
      this.boxOn = !this.boxOn;
    },
  },
});

app.mount("#app");

const theBox = document.getElementById("boxThatWasClicked");

theBox.addEventListener("click", function (event) {
  event.target.classList.toggle("arch-box-on");
});
