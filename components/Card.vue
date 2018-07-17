<template>
  <div class="tile">
      <div class="img-wrapper">
        <img :src="image" :alt="name"/>
      </div>
      <div class="text">
        <div class="title">
          {{ name }}
        </div>
        <div class="artist">
          {{ artist }}
        </div>
        <div class="album">
          {{ album }}
        </div>
        <div class="audio-wrapper" v-if="sound !== null">
          <div class="buttons">
            <div v-if="play === 0" class="play-button" @click="playAudio()">
              <img src="~/assets/img/play-button.svg" alt="Play icon"/>
            </div>
            <div v-if="play === 1" class="pause-button" @click="stopAudio()">
              <img src="~/assets/img/pause-sign.svg" alt="Pause icon"/>
            </div>
          </div>
          <audio loop>
            <source :src="sound"/>
          </audio>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        play: 0
      }
    },
    methods: {
      playAudio: function() {
        this.$el.querySelector("audio").play();
        this.play = 1;
      },
      stopAudio: function() {
        this.$el.querySelector("audio").pause();
        this.$el.querySelector("audio").currentTime = 0;
        this.play = 0;
      }
    },
    props: ["image", "name", "artist", "album", "sound"]
  }
</script>
