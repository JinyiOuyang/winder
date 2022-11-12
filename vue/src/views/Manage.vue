<template>
  <el-container class="layout-container" style="height: 1000px">
    <el-aside width="200px">
      <SideNavigator></SideNavigator>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <AppHeader></AppHeader>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>

</template>



<script setup>
import {reactive} from "vue";
import router from "../router/index.js";
import SideNavigator from "../components/SideNavigator.vue";
// import HeaderNavigator from "../components/HeaderNavigator.vue";
import AppHeader from "../components/AppHeader.vue";

const state = reactive({
  tableData: []
})

if(localStorage.getItem("username")==null){
  router.push('/login')
}
</script>

<style scoped>
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  --el-header-height: fit-content(20em);
}
.layout-container .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container .el-main {
  padding: 0;
}


</style>
