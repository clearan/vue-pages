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

  <input type="text" :value="value" @input="change">
  <br>
  <child-page v-model="result" type="text" name="123" class="child" @gotSon="updateVal">
    <template v-slot:header="aaaa"><!--slotProps可以取别的名字，接收子组件传过来的props：user-->
      <h4>我是header</h4>
      <h5>{{aaaa.user.name}}</h5>
    </template>
<!--    <template v-slot:header="{user}">--> <!--可以解构-->
<!--      <h4>我是header</h4>-->
<!--      <h5>{{user.age}}</h5>-->
<!--    </template>-->
    <template #footer>
      我是footer
    </template>
  </child-page>
  <p>{{son}}</p>
<!--  <ul>-->
<!--    <li is="child-page" v-model="result"></li>-->
<!--  </ul>-->
</div>
</template>

<script>
import {test} from '@/common'
import {test2} from '@/common2'
import childPage from "@/pages/pc/view/ChildPage";
export default {
  name: "MainPage",
  components: {
    childPage
  },
  provide: () => {
    return {
      getMap: 'abc'
    }
  },
  data() {
    return {
      value: 3,
      result: true,
      son: '1'
    }
  },
  methods: {
    change(e) {
      this.value = e.target.value
    },
    updateVal(val) {
      this.son = val
    }
  },
  created() {
    console.log('pc的test', test())
    console.log('pc的test2', test2())
    console.log(this.myMethod)
  }
}
</script>

<style scoped>

</style>
