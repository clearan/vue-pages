<template>
<div>
  <p>PC端的主页</p>
  <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
    <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
  <el-button-group>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
  </el-button-group>
</div>
</template>

<script>
import {test} from '@/common'
import {test2} from '@/common2'

export default {
  name: "MainPage",
  created() {
    console.log('pc的test', test())
    console.log('pc的test2', test2())
    console.log(this.myMethod)
  }
}
</script>

<style scoped>

</style>
