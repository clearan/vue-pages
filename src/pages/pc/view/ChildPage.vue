<template>
  <div>
    <input type="checkbox" :checked="checked"  @change="change" class="my">
    <br>
    <son-page v-bind="$attrs" sex="男" v-on="$listeners"></son-page>
    <div class="header">
      <slot name="header" :user="list">666</slot><!--666为备用内容；user绑定一个list，user作为props传递给父组件-->
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import SonPage from "@/pages/pc/view/SonPage";
export default {
  name: "ChildPage",
  components:{
    SonPage
  },
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
  },
  data() {
    return {
      list: {
        name: 'clear',
        age: 20
      }
    }
  },
  created() {
    console.log(this.$attrs)
    console.log('$slots', this.$slots.footer)
  },
  methods: {
    change(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style scoped>

</style>