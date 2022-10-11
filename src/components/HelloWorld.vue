<template>
  <!-- <div>{{ a }}</div> -->
  <div>2{{ msg }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      a: "",
      msg: "第二次函数：",
      bool: 0,
    };
  },
  mounted() {
    this.a = this.getNumber([2, 7, 11, 15], 9);

    this.runAsync().then(
      (res) => {
        this.msg = res;
        console.log(res);
      },
      (reason) => {
        this.bool++;
        this.runAsync();
        console.log(reason);
      }
    );
  },
  methods: {
    getNumber(nums, target) {
      for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums.length; j++) {
          if (nums[i] + nums[j] == target) {
            return [i, j];
          }
        }
      }
    },
    runAsync() {
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.bool == 3) {
            resolve("2:::成功调用");
          } else {
            reject("2:::失败");
          }
        }, 2000);
      });
      return p;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
