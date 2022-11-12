<template>
  <div class="group-scroll-panel">
    <main >
      <PostGroup v-for="(anime, i) in anime_list" :key="i" :anime="anime" />
    </main>
  </div>
</template>

<script>
import PostGroup from "./PostGroup.vue";
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
      const anime_titles = [
        "Group 1",
        "Group 2",
        "Group 3",
        "Group 4",
        "Group 5",
      ];
      const anime_sport = [
        "Hiking",
        "Biking",
        "Basketball",
        "Badminton",
        "Running",
      ];
      const anime_exp = [
        "beginner",
        "intermediate",
        "intermediate",
        "professional",
        "beginner",
      ];
      const anime_size = [
        5,
        4,
        10,
        2,
        8,
      ];
      const anime_time = [
        "2022-12-20 08:00 (EST)",
        "2022-12-05 13:00 (EST)",
        "2022-12-01 10:00 (EST)",
        "2022-11-20 17:00 (EST)",
        "2022-11-25 15:00 (EST)",
      ];
      const anime_location = [
        "Blacksburg, VA, 22030",
        "College Park, MD, 15641",
        "Falls Church, VA, 45268",
        "Washington, D.C., 22654",
        "Arlington, VA, 20350",
      ];
      const anime_createdBy = [
        "User 4",
        "User 8",
        "User 2",
        "User 5",
        "User 7",
      ];
      const anime_ids = [
        2001,
        2002,
        2003,
        2004,
        2005,
      ];
      const anime = [];
      for (let i = 0; i < anime_titles.length; i++) {
        anime.push({
          title: anime_titles[i],
          sport: anime_sport[i],
          experience: anime_exp[i],
          time: anime_time[i],
          location: anime_location[i],
          size: anime_size[i],
          createdBy: anime_createdBy[i],
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
};
</script>

<style scoped>
.group-scroll-panel {
  box-sizing: border-box;
  min-height: 120vh;
}
main{
  background-color: lightgray;
  width: 565px;
  margin: 2rem auto;
  border-radius: 2rem;
}
</style>