<template>
  <div id="app">
    <!-- <HelloWorld :msg="msg" /> -->
    <p>{{ msg }}</p>
    <router-link to="/home">2 </router-link>
    <router-link to="/about"> 1</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  // HelloWorld,
  // },
  data() {
    return {
      bool: true,
      msg: "",
    };
  },
  mounted() {
    // this.runAsync().then(
    //   (res) => {
    //     this.msg = res;
    //     console.log(res);
    //   },
    //   (reason) => {
    //     this.msg = reason;
    //     console.log(reason);
    //   }
    // );

    // this.getNumber().then(
    //   (res) => {
    //     console.log("resolved", res);
    //   },
    //   (reason) => {
    //     console.log("rejected", reason);
    //   }
    // );
  },
  methods: {
    // runAsync() {
    //   let p = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       if (this.bool) {
    //         resolve("runAsync:::resolve");
    //       } else {
    //         reject("runAsync:::reject");
    //       }
    //     }, 2000);
    //   });
    //   return p;
    // },
    // getNumber() {
    //   let p = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       let num = Math.ceil(Math.random() * 10);
    //       if (num < 5) {
    //         resolve(num);
    //       } else {
    //         reject("num >= 5");
    //       }
    //     }, 2000);
    //   });
    //   return p;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
