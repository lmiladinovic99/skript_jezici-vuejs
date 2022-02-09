<template>
  <div id="app">
    <PlayersList />
  </div>
</template>

<script>
  import PlayersList from '@/components/PlayersList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Players',
    
    components: {
      PlayersList
    },

    watch: {
      
    },

    mounted() {
        
    },

    methods: {
      ...mapActions([
        
      ])
    }
  }
</script>

<style scoped>

</style>
