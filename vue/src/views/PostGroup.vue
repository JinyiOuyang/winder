<template>
  <article>
    <h2>
      {{ anime.title }}
    </h2>
    <p>
      {{ anime.description }}
    </p>
  </article>
</template>

<script>
export default {
  props: ["anime"],
  name: "PostGroup"
}
</script>

<style scoped>
article {
  background-color: #07564d;
  border-radius: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.15);
  color: #EF5B5B;
  margin-bottom: 20px;
}

article h2 {
  /*font-family: Monda;*/
}

</style>