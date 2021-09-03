const App = {
    data: () => ({
        myHtml:'<h1>Vue3</h1>',
        title: "VUE_3",
        arr: ["Hi", "Hello", "Good_Day", "Good_Everning"],
        obj: {
            age: 34,
            weight: 60,
            mass:80
        },
        items:[1,2,3,4,5,6,7],
    }),
    methods: {
        stopPropagation(e) {
            e.stopPropagation()
        }
        },
    //     toUpperCase(item) {
    //         return item.toUpperCase()
    //     },
    //     deleteTask(i) {
    //         this.tasks.splice(i,1)
    //     }
    // },
    // computed: {
    //     doubleCount(){
    //         return this.tasks.length*2
    //     }
    // },
    // watch: {
    //     inputValue(value) {
    //         if (value.length > 15) {
    //             this.inputValue = ''
    //             alert("Your task must be less than 15 characters");
    //         }
    //     }
    // }
}
Vue.createApp(App).mount(`#app`)
