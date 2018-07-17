<template>
  <header class="o-header">
    <nuxt-link to="/">
      <div class="logo">
        <img src="~/assets/img/spotify.svg" alt="Spotify icon"/>
        <span>SongFinder</span>
      </div>
    </nuxt-link>
    <div class="form">
      <form id="searchform" @submit.prevent="submit">
        <input id="searchinput" type="text" placeholder="Start typing here..." v-model="search" ref="search" required>
        <input id="tokeninput" type="text" placeholder="Your token here..." v-model="token" ref="token" required>
        <button type="submit">
          <img src="~/assets/img/search.svg" alt="Search icon"/>
          <span>Search your songs</span>
        </button>
      </form>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        search: "",
        token: ""
      }
    },
    methods: {
      submit(event) {
        this.$router.push({path: `/results/${this.search}`, query: {token: `${this.token}`}});
      }
    }
  }
</script>

<style scoped>
</style>
