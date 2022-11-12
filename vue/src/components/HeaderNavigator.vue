<template>
  <div class="navigator">
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/findworkoutpartner">Workout Partner</router-link> |
    <router-link class="nav-link" to="/findgroupactivity">Group Activity</router-link> |
    <router-link class="nav-link" to="/">How To</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNavigator"
}
</script>

<style scoped>
.navigator{
  line-height: 60px;
  width: 700px;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  font-family: Monda;
  /*border: solid 3px #1a1a1a;*/
}
.nav-link {
  text-decoration: none;
}
.nav-link:hover {
  text-decoration: underline 2px black;
}
</style>