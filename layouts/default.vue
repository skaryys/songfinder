<template>
  <div>
      <Header/>
    <section class="t-content">
      <nuxt/>
    </section>
  </div>
</template>

<script>
  import Header from "~/components/Header.vue";
  export default {
    components: {
      Header
    }
  }
</script>
