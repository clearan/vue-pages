<template>
  <div>
    <p>孙子</p>
    <div @click="handleClick">改变</div>
  </div>
</template>

<script>
export default {
  name: "SonPage",
  props: {
    name: String
  },
  inject: ['getMap'],
  created() {
    console.log('孙子', this.name)
    console.log('孙子attr', this.$attrs)
    console.log('孙子inject', this.getMap)
  },
  methods: {
    handleClick() {
      this.$emit('gotSon', 999)
    }
  }
}
</script>

<style scoped>

</style>