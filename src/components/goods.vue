<template>
  <div class="goods">
    <h1>{{ msg }}</h1>
    <h3>hele is goods page.</h3>
    <h3>page goods it works.</h3>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      msg: 'Welcome to the goods page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 ,h3{
  font-weight: normal;
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
