<template>
  <div id="app">
    <b-row>
      <b-col id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/comments">Comments</router-link> |
        <router-link to="/players">Players</router-link> |
        <router-link to="/teams">Teams</router-link>
      </b-col>
      <b-col id="log">
        <b-button variant="outline-dark">Register</b-button>  
        <b-button variant="outline-dark">Login</b-button>
      </b-col>
      <router-view/>
    </b-row>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "App",
        methods: {
            ...mapActions(['loadPlayers', 'loadTeams', 'loadComments'])
        },
        mounted: function() {
            this.loadComments();
            this.loadPlayers();
            this.loadTeams();
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#log {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
