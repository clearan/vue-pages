<template>
<div>
  <p>移动端主页</p>
  <button @click="goList">查看列表</button>
</div>
</template>

<script>
// import {test} from '@/common'
import {test2} from '@/common2'
export default {
  name: "HomePage",
  methods: {
    goList() {
      this.$router.push({name: 'list'})
    }
  },
  created() {
    console.log('卧槽');
    console.log(test2())
  }
}
</script>

<style scoped>

</style>
