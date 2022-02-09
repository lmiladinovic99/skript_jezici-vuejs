<template>
  <div id="app">
    <CommentsList />
  </div>
</template>

<script>
  import CommentsList from '@/components/CommentsList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Comments',
    
    components: {
      CommentsList
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
