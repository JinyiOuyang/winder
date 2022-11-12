<template>
  <div class="navigator">
<<<<<<< HEAD
    <router-link class="nav-link" to="/" index = "/">Home</router-link> |
    <router-link class="nav-link" to="/profile" index = "/profile">Profile</router-link> |
    <router-link class="nav-link" to="/findworkoutpartner" index = "/findworkoutpartner">Workout Partner</router-link> |
    <router-link class="nav-link" to="/findgroupactivity" index = "/findgroupactivity">Group Activity</router-link> |
=======
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/findworkoutpartner">Workout Partner</router-link> |
    <router-link class="nav-link" to="/findgroupactivity">Group Activity</router-link> |
>>>>>>> finish the workout partner and group activity pages
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
  width: 100%;
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