<template>
  <div id="app">
    <TeamsList />
  </div>
</template>

<script>
  import TeamsList from '@/components/TeamsList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Teams',
    
    components: {
      TeamsList
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
