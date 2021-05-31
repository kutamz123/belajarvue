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
//     // seen: true,
//     studies: ["belajar vue", "belajar react", "belajar angular"],
//   },
// });

// 4. menampilkan data dengan for
// var app = new Vue({
//   el: "#app-4",
//   data: {
//     // array
//     // studies: [
//     //   { text: "belajar vue" },
//     //   { text: "belajar react" },
//     //   { text: "belajar angular" },
//     // ],
//     // object
//     studies: {
//       nama: "Evan You",
//       profession: "CEO Vue js",
//     },
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
//     checkbox: [],
//   },
// });

// 7. menampilkan data dengan component di HTML

// Vue.component("todo-item", {
//   template: "<li>This is a todo</li>",
// });

// var app = new Vue({
//   el: "#app-7",
//   data: {
//     message: "ini adalah vue",
//   },
// });

// 8. menampilkan data dengan component dengan props

// Vue.component("todo-item", {
//   props: ['todo'],
//   template: "<li>{{ todo.text }}</li>",
// })

// var app = new Vue({
//   el: "#app-8",
//   data: {
//     groceryList: [
//       {"id": 0, text: "vegetables"},
//       {"id": 1, text:"Cheese"},
//       {"id": 2, text: " Whatever else human are supposed"}
//   ]
//   }
// })

// 9. perbedaan computed dan methods
// var app = new Vue({
//   el: "#app-9",
//   data: {
//     namaDepan : "Andika",
//     namaBelakang: "Utama"
//   },
//   methods: {
//     namaLengkap : function(umur) {
//       return this.namaDepan + " " + this.namaBelakang + " " + umur + " Tahun"
//     }
//   },
//   computed: {
//     namaLengkap: function() {
//       return this.namaDepan + this.namaBelakang
//     }
//   }
// });

// 10. latihan computed property
// var app = new Vue({
//   el: "#app-10",
//   data: {
//     bilangan : 3
//   },
//   computed: {
//     bagi: function() {
//       return this.bilangan%2 === 0 ? "Genap" : "Ganjil"
//     },
//     hasil : function() {
//       return "bilangan ini adalah " + this.bagi
//     }
//   }
// });

// 11. attribute binding
// var app = new Vue({
//   el: "#app-11",
//   data: {
//     gambar: "image/1.jpg",
//     // --- object array ---
//     // gambars: [
//     //   { text: "image/1.jpg" },
//     //   { text: "image/2.jpg" },
//     //   { text: "image/3.jpg" },
//     //   { text: "image/4.jpg" },
//     //   { text: "image/5.jpg" },
//     //   { text: "image/6.jpg" },
//     // ],

//     // --- array ---
//     gambars: [
//       "image/1.jpg",
//       "image/2.jpg",
//       "image/3.jpg",
//       "image/4.jpg",
//       "image/5.jpg",
//       "image/6.jpg",
//     ],
//   },
//   methods: {
//     changeImage: function (e) {
//       return (this.gambar = e.target.src);
//     },
//   },
// });

// 12. class binding
// var app = new Vue({
//   el: '#app-12',
//   // data: {
//   //   isActive: true,
//   //   hasError: true
//   // }
//   data: {
//     objectClass: {
//       active: true,
//       'text-danger': true
//     }
//   }
// })

// 13. latihan class binding
// var app = new Vue({
//   el: "#app-13",
//   data: {
//     menu: "home",
//   },
// });

// 15. elemen template
// var app = new Vue({
//   el: "#app-15",
//   data: {
//     seen: true,
//     examples: ["belajar vue", "belajar react", "belajar angular"],
//   },
// });

// 16. v-else-if

var app = new Vue({
  el: "#app-16",
  data: {
    study: "belajar angularjs1",
  },
});
