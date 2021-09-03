const App = {
  data: () => ({
    myHtml: "<h1>Vue3</h1>",
    title: "VUE_3",
    arr: ["Hi", "Hello", "Good_Day", "Good_Everning"],
    obj: {
      age: 34,
      weight: 60,
      mass: 80,
    },
    items: [1, 2, 3, 4, 5, 6, 7],
  }),
  methods: {
    addItem(e) {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
     
    },
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(item);
    },
  },

  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
};
Vue.createApp(App).mount(`#app`)
