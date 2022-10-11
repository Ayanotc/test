<template>
  <div>1{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      msg: "第一次函数：",
    };
  },
  mounted() {
    this.runAsync().then(
      (res) => {
        this.msg = res;
        console.log(res);
      },
      (reason) => {
        this.msg = reason;
        console.log(reason);
      }
    );
  },
  methods: {
    runAsync() {
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          let bool = false;

          if (bool) {
            resolve("1:::成功");
          } else {
            reject("1:::失败");
          }
        }, 2000);
      });
      return p;
    },
  },
};
</script>