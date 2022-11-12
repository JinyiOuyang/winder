<template>
  <div class="user-scroll-panel">
    <main>
      <PostPartner v-for="(anime, i) in anime_list" :key="i" :anime="anime"/>
    </main>
  </div>
</template>


<script>
import PostPartner from "./src/views/PostPartner.vue";

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
    getAnime() {
      const anime_titles = [
        "User 1",
        "User 2",
        "User 3",
        "User 4",
        "User 5",
        "User 6",
        "User 7",
        "User 8",
        "User 9",
        "User 10",
      ];
      const anime_ages = [
        "24",
        "36",
        "25",
        "28",
        "30",
        "32",
        "23",
        "40",
        "27",
        "49",
      ];
      const anime_address = [
        "Blacksburg, VA, 22030",
        "College Park, MD, 15641",
        "Falls Church, VA, 45268",
        "Washington, D.C.",
        "Blacksburg, VA",
        "College Park, MD",
        "Falls Church, VA",
        "Washington, D.C.",
        "Blacksburg, VA",
        "College Park, MD",
      ];
      const anime_imgSrc = [
        "user1.jpg",
        "user2.jpg",
        "user3.jpg",
        "user4.jpg",
        "user5.jpg",
        "user6.jpg",
        "user7.jpg",
        "WinderIcon.jpg",
        "WinderIcon.jpg",
        "WinderIcon.jpg",
      ];
      const anime_ids = [
        1001,
        1002,
        1003,
        1004,
        1005,
        1006,
        1007,
        1008,
        1009,
        1010,
      ];
      const anime = [];
      for (let i = 0; i < anime_titles.length; i++) {
        // let userIndex = Math.floor(Math.random() * anime.title.length);
        anime.push({
          imgScr: anime_imgSrc[i],
          title: anime_titles[i],
          age: anime_ages[i],
          description:
              "Student",
          address: anime_address[i],
          id: anime_ids[i]
        });
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
  },
  mounted() {
    this.anime_list = this.getAnime();
    window.addEventListener("scroll", this.handleScroll);
  },
}
</script>


<style scoped>
.user-scroll-panel {
  box-sizing: border-box;
  min-height: 120vh;
}

main {
  background-color: lightgray;
  width: 565px;
  /*pading: 2rem 2rem;*/
  margin: 2rem auto;
  border-radius: 2rem;
}
</style>