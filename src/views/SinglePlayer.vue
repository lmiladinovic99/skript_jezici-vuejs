<template>
  <div>
    <b-row>
        <h1 v-if="player">{{ player.firstName }} {{ player.lastName }} {{ player.number }}  {{ player.team.name }}</h1>
    </b-row>
    <b-row v-if="comments" v-for="comment in comments">
        <ul v-if="comment && comment.player.id==player.id">
            <li>Comment: {{ comment.comment }}</li>
            <li>Rating: {{ comment.rating }}</li>
            <li>User: {{ comment.user.firstName }} {{ comment.user.lastName }}</li>
        </ul>
    </b-row>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'SinglePlayer',

    components: {

    },

    data() {
      return {
        
      }
    },

    computed: {
      ...mapState([
        'player', 'comments'
      ])
    },
    
    methods: {
      ...mapActions([
        'loadPlayerById'
      ])
    },

    mounted() {
      this.loadPlayerById(this.$route.params.id);
    }
  }

</script>