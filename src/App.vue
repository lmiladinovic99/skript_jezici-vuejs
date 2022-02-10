<template>
  <div id="app">
    <b-row>
      <b-col id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/comments">Comments</router-link> |
        <router-link to="/players">Players</router-link> |
        <router-link to="/teams">Teams</router-link>
      </b-col>
      <b-col v-if="isLogged" id="log">
        <b-button variant="outline-dark" @click="logout" href="/">Logout</b-button>  
      </b-col>
      <b-col v-else id="log">
        <b-button variant="outline-dark" href="/register">Register</b-button>  
        <b-button variant="outline-dark" href="/login">Login</b-button>
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
            ...mapActions(['loadPlayers', 'loadTeams', 'loadComments']),
            logout() {
              localStorage.token = "";
              this.$router.push({ name: 'Home' });
            }
        },
        data() {
          return {
            isLogged: false
          }
        },

        mounted: function() {
            this.loadComments();
            this.loadPlayers();
            this.loadTeams();

            if (localStorage.token !== "") {
              this.isLogged = true;
            }

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
