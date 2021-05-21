// 1. menampilkan data
// var app = new Vue({
//   el: "#app",
//   data: {
//     study: "belajar vue",
//   },
// });

// 2. menampilkan data dengan title
// var app = new Vue({
//   el: "#app-2",
//   data: {
//     study: "belajar vue, waktu : " + new Date().toLocaleString(),
//   },
// });

// 3. menampilkan data dengan if
// var app = new Vue({
//   el: "#app-3",
//   data: {
//     seen: true,
//   },
// });

// 4. menampilkan data dengan for
// var app = new Vue({
//   el: "#app-4",
//   data: {
//     studies: [
//       { text: "belajar vuew" },
//       { text: "belajar react" },
//       { text: "belajar angular" },
//     ],
//   },
// });

// 5. menampilkan data dengan click
// var app = new Vue({
//   el: "#app-5",
//   data: {
//     message: "ini adalah vue",
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split("").reverse().join("");
//     },
//   },
// });

// 6. menampilkan data dengan form input
// var app = new Vue({
//   el: "#app-6",
//   data: {
//     message: "ini adalah vue",
//   },
// });

// 7. menampilkan data dengan component

Vue.component("todo-item", {
  template: "<li>This is a todo</li>",
});

var app = new Vue({
  el: "#app-7",
  data: {
    message: "ini adalah vue",
  },
});
