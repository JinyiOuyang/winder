<template>
  <div class="group-scroll-panel">
    <div style="margin-bottom: 20px">
      <el-input style="width: 260px; margin-right: 10px" v-model="sportid" placeholder="Sportid" clearable></el-input>
      <el-button type="primary" @click="find"><el-icon style="margin-right: 3px"><Search /></el-icon> Find</el-button>
    </div>
    <main >
      <PostGroup v-for="(anime, i) in anime_list" :key="i" :anime="anime" />
    </main>
  </div>
</template>

<script>
import PostGroup from "./PostGroup.vue";
import {reactive, ref} from "vue";
import request from "../request";
import {ElNotification} from "element-plus";

const sportid = ref('')

const state = reactive({
  tableDate: []
})

export default {
  name: "FindGroupActivity",
  data () {
    return {
      anime_list: []
    }
  },
  components: {
    PostGroup,
  },
  methods: {
    //use fecth api to replace them
    getAnime() {
      // const anime_titles = [
      //   "Group 1",
      //   "Group 2",
      //   "Group 3",
      //   "Group 4",
      //   "Group 5",
      //   "Group 6",
      //   "Group 7",
      //   "Group 8",
      //   "Group 9",
      //   "Group 10",
      //   "Group 11",
      //   "Group 12",
      // ];
      // const anime = [];
      // for (let i = 0; i < 10; i++) {
      //   anime.push({
      //     title: anime_titles[
      //         Math.floor(Math.random() * anime_titles.length)
      //         ],
      //     description:
      //         "Sport: Tennis, Experience: Intermediate, Group size: 8",
      //   });
      // }

      const anime = [];
      for (let i = 0; i < 1; i++ ){
        if(state.tableData){
          anime.push({
            title: state.tableData[i].id,
            description: state.tableData[i].time
          })
        }

      }

      return anime;
    },
    handleScroll() {
      if (
          window.scrollY + window.innerHeight >=
          document.body.scrollHeight - 50
      ) {
        const new_anime = this.getAnime();
        this.anime_list = [...this.anime_list, ...new_anime];
      }
    },
    find() {
      request.get("/event/find", {
        params: {
          userid: localStorage.getItem('userid'),
          sportid: sportid.value
        }
      })
          .then(res => {
            state.tableData = res;
            this.getAnime();
            const instance = getCurrentInstance();
            instance.proxy.forceUpdate();
            this.$forceUpdate()
          })
    },

    add(index){
      request.get('/event/'+state.tableData[index].id).then(res => {
        let event = res

        if(event.participantid.length>0) {
          event.participantid += ","
          event.participantid += localStorage.getItem("userid")
        }else{
          event.participantid += localStorage.getItem("userid")
        }

        request.post('/event/update', event).then(res => {
          if (res.code === '200') {
            ElNotification({
              type: 'success',
              message: 'Join Success'
            })
            find()
          } else {
            ElNotification({
              type: 'error',
              message: res.msg
            })
          }
        })
      })
    },
  },

  mounted() {
    this.anime_list = this.getAnime();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>

.group-scroll-panel {
  box-sizing: border-box;
  min-height: 120vh;
  /*background-color: #2c3e50;*/
  padding-top: 3rem;
}

main{
  background-color: lightgray;
  width: 565px;
  margin: 2rem auto;
  border-radius: 2rem;
}
</style>