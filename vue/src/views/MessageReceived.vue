<template>
  <div class="user-scroll-panel">
    <main>
      <PostPartner v-for="(anime, i) in anime_list" :key="i" :anime="anime"/>
    </main>
  </div>
</template>



<script>

import PostPartner from "./PostPartner.vue";
import { Search } from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import request from "../request";
import {ElNotification} from "element-plus";
import { getCurrentInstance } from 'vue';

const sex = ref('')
const ageLower = ref('')
const ageUpper = ref('')

const state = reactive({
  tableDate: []
})

export default {
  name: "FindWorkoutPartner",
  data() {
    return {
      anime_list: []
    }
  },
  components: {
    PostPartner,
  },
  methods: {
    //use fecth api to replace them
    match() {
      request.get("/user/match", {
        params: {
          userId: localStorage.getItem('userid'),
          sex: sex.value,
          ageLower: ageLower.value,
          ageUpper: ageUpper.value
        }
      })
          .then(res => {
            state.tableData = res;
            // this.getAnime();
            this.$forceUpdate()
          })
    },
    getAnime() {
      // const anime_titles = [
      //   "User 1",
      //   "User 2",
      //   "User 3",
      //   "User 4",
      //   "User 5",
      //   "User 6",
      //   "User 7",
      //   "User 8",
      //   "User 9",
      //   "User 10",
      //   "User 11",
      //   "User 12",
      // ];
      // const anime = [];
      // for (let i = 0; i < 10; i++) {
      //   anime.push({
      //     title: anime_titles[
      //         Math.floor(Math.random() * anime_titles.length)
      //         ],
      //     description:
      //         "Alex Coolkid, 23 Blacksburg, VA",
      //   });
      // }
      const anime = [];

      // for (let i = 0; i < anime_titles.length; i++) {
      //   // let userIndex = Math.floor(Math.random() * anime.title.length);
      //   anime.push({
      //     imgScr: anime_imgSrc[i],
      //     title: anime_titles[i],
      //     age: anime_ages[i],
      //     description:
      //         "Student",
      //     address: anime_address[i],
      //     id: anime_ids[i]
      //   });
      // }

      // const anime = [];
      // this.match();
      if (state.tableData) {
        this.match()
      for (let i = 0; i < 3; i++ ) {
          anime.push({
            // title: state.tableData[i].id,
            // description: state.tableData[i].username
            imgScr: anime_imgSrc[i],
            title: state.tableData[i].username,
            age: state.tableData[i].age,
            description: state.tableData[i].sex,
            address: state.tableData[i].address,
            id: state.tableData[i].id
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



    add(index) {
      request.get('/userrelation/relation/'+localStorage.getItem("userid")).then(res => {
        let userRelation = res

        if(userRelation.mateid.length>0) {
          userRelation.mateid += ","
          userRelation.mateid += state.tableData[index].id
        }else{
          userRelation.mateid += state.tableData[index].id
        }

        request.post('/userrelation/update', userRelation).then(res => {
          if (res.code === '200') {
            ElNotification({
              type: 'success',
              message: 'Match Success'
            })
            match()
          } else {
            ElNotification({
              type: 'error',
              message: res.msg
            })
          }
        })
      })
    }


  },
  mounted() {
    this.anime_list = this.getAnime();
    window.addEventListener("scroll", this.handleScroll);
  },
};

</script>


<style scoped>
.user-scroll-panel {
  box-sizing: border-box;
  /*background-color: #2c3e50;*/
  min-height: 100vh;
  padding-top: 3rem;
}

main {
  pading: 0 2rem;
  max-width: 640px;
  margin: 0 auto;

}
</style>