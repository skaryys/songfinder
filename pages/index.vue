<template>
  <div class="container">

    <div class="component tiles">

      <transition name="fade" appear>
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3 tile-wrapper">
        <div class="tile">
          <div class="bigtext">
            Is this not what you expected?<br><strong>Find your song in the bar above!</strong><br><br>
            Get your token <a href="https://developer.spotify.com/console/get-search-item/" target="_blank">here</a>.
          </div>
        </div>
      </div>
      </transition>

    </div>

  </div>
</template>

<script>

</script>

<style scoped>
  a {
    text-decoration: underline;
    &:hover {
        text-decoration: none;
     }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1200ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
