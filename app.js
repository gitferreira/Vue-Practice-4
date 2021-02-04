const app = Vue.createApp({
  data() {
    return {
      clase: "",
      par: false,
      par2: false,
      par3: false,
    };
  },

  methods: {
    takeClass(e) {
      this.clase = e.target.value;
      if (this.clase === "user1") {
        this.par = !this.par;
      } else if (this.clase === "user2") {
        this.par2 = !this.par2;
      }
    },
    toggleVisibility() {
      this.par3 = !this.par3;
    },
  },

  computed: {
    parClasses() {
      return {
        user1: this.par,
        user2: this.par2,
      };
    },

    visClasses() {
      return {
        hidden: this.par3,
      };
    },
  },
});

app.mount("#assignment");
