<template>
  <div>
    <b-row>
        <h1 v-if="team">{{ team.name }} {{ team.country }}</h1>
    </b-row>
    <b-row v-if="players" v-for="player in players">
        <ul v-if="player && player.team.id==team.id">
            <li>First Name: {{ player.firstName }}</li>
            <li>Last Name: {{ player.lastName }}</li>
            <li>Number: {{ player.number }}</li>
        </ul>
    </b-row>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'SingleTeam',

    components: {

    },

    data() {
      return {
        
      }
    },

    computed: {
      ...mapState([
        'team', 'players'
      ])
    },
    
    methods: {
      ...mapActions([
        'loadTeamById'
      ])
    },

    mounted() {
      this.loadTeamById(this.$route.params.id);
    }
  }

</script>