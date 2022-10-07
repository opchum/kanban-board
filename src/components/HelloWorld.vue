<template>
  <div class="header">
    <h1>{{ msg }}</h1>
      <b-button class="clearAll" variant="danger">Clear All</b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  text-align: center;
  margin: 20px;
  font-weight: bolder;
  display: flex;
  align-items: center;
}
</style>
