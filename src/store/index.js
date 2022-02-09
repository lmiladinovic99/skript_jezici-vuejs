import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    comment: null, 
    players: [], 
    player: null,
    teams: [],
    team: null,
    token: ''
  },
  mutations: {
    setComments: function(state, comments) {
      state.comments = comments;
    },
    addComments: function(state, comments) {
      state.comments.push(comments);
    },
    setComment: function(state, comment) {
      state.comment = comment
    },
    setPlayers: function(state, players) {
      state.players = players;
    },
    addPlayers: function(state, players) {
      state.players.push(players);
    },
    setPlayer: function(state, player) {
      state.player = player
    },
    setTeams: function(state, teams) {
      state.teams = teams;
    },
    addTeams: function(state, teams) {
      state.teams.push(teams);
    },
    setTeam: function(state, team) {
      state.team = team;
    },
  },
  actions: {
    loadComments: function ({ commit }) {
      fetch('http://127.0.0.1:8088/api/comments', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('setComments', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    loadPlayers: function ({ commit }) {
      fetch('http://127.0.0.1:8088/api/players', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('setPlayers', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    loadTeams: function ({ commit }) {
      fetch('http://127.0.0.1:8088/api/teams', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('setTeams', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    loadCommentById: function ({ commit }, id) {
      fetch(`http://localhost:8088/api/comments/${id}`, { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('setComment', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    loadPlayerById: function ({ commit }, id) {
      fetch(`http://localhost:8088/api/players/${id}`, { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('setPlayer', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    loadTeamById: function ({ commit }, id) {
      fetch(`http://localhost:8088/api/teams/${id}`, { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('setTeam', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
  },
  modules: {
  }
})
