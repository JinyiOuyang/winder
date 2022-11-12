<template>
  <header>
    <section class="winder-logo">
      <router-link :to="'/'">
        <img
            src="../assets/images/Winder_Logo.png"
            alt="Winder Logo"
        />
      </router-link>
    </section>
    <section class="header-navigator-login">
      <section class="header-navigator">
        <header-navigator></header-navigator>
      </section>
      <section class="header-login">
        <router-link to="/login">
          <button class="button login">
            <font-awesome-icon icon="fa-solid fa-user" size="lg" />
            &nbsp;Login
          </button>
        </router-link>
      </section>
    </section>
  </header>
</template>

<script>
import HeaderNavigator from "./HeaderNavigator.vue";
export default {
  name: "AppHeader",
  components: {HeaderNavigator}
}
</script>

<style scoped>
header {
  background: rgba(251, 206, 59, 1);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  gap: 0rem;
  text-align: center;
}
.winder-logo {
  line-height: 1;
  margin-top: 0px;
  align-items: center;
  padding: 4px;
  /*border: solid 3px #1a1a1a;*/
}
.header-navigator-login {
  display: flex;
  /*flex-wrap: wrap;*/
  flex-direction:row;
  align-items: flex-start;
  /*gap: 32rem;*/
}
.header-navigator {
  display: inline-flex;
  height: 60px;
  margin-left: 10px;
}
.header-login {
  display: inline-flex;
  height: 60px;
}

button {
  background-color: rgba(251, 206, 59, 1);
  height: 60px;
  width: 150px;
  border: 0;
}
.button:hover {
  /*outline: black solid 3px;*/
  background:rgba(251, 206, 59, 1);
  color: #fff;
  opacity:1;
  cursor: pointer;
}
.login {
  font-family: Monda;
  font-size: 30px;
}
</style>