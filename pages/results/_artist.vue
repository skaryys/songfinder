<template>
  <div class="container">
      <div v-if="songsData" class="component tiles">

        <transition name="fade" appear>
        <div v-if="songsData.length < 1" class="col-xs-12 col-md-6 col-lg-4 col-xl-3 tile-wrapper">
          <div class="tile">
            <div class="bigtext">
              Is this not what you expected?<br><strong>Find your song in the bar above!</strong>
            </div>
          </div>
        </div>
        </transition>

        <transition name="fade" v-for="song in songsData" appear>
          <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
          <Card :image="song.album.images[1].url"
                :name="song.name"
                :artist="song.artists[0].name"
                :album="song.album.name"
                :sound="song.preview_url"></Card>
          </div>
        </transition>
       </div>
  </div>
</template>

<script>
  import Card from "~/components/Card.vue";
  import axios from "axios";
  export default {
    components: {
      Card
    },
    asyncData ({params,query}) {
      return axios.get(`https://api.spotify.com/v1/search?q=${params.artist}&type=track`, {
        headers: {
          "Accept" : "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${query.token}`
        }
      })
        .then((response) => {
          return {songsData: response.data.tracks.items}
        });
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2500ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
