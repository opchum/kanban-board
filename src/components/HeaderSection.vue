<template>
  <div class="header">
    <div class="leftHeader">
      <p class="h1 mx-2">
        <b-icon icon="bookmark-check"></b-icon>
      </p>
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  text-align: center;
  font-weight: bolder;
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  padding: 5px;
  border-bottom: 1px solid black;
  height:80px;
}

.header:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.leftHeader{
  display:flex;
}
</style>
