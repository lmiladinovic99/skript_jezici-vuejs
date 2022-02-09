<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="teams.length"
      :per-page="perPage"
      aria-controls="teams-table"
    ></b-pagination>
    <b-table
      id="teams-table"
      hover 
      fixed
      v-if="teams.length" 
      sticky-header="800px"
      :items="teams"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      head-variant="light"
      @row-clicked="rowClicked"
    >
    </b-table>
    <h1 v-else>No teams</h1>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'TeamsList',

    data() {
      return {
        fields: [
            { key: 'id' },
            { key: 'name' },
            { key: 'country' },
            { key: 'trainerName' }
        ],
        currentPage: 1,
        perPage: 5
      }
    },

    computed: {
      ...mapState([
        'teams'
      ])
    },

    watch: {
      
    },

    mounted() {
      
    },

    methods: {
      ...mapActions([
        
      ]),

      rowClicked(record, index) {
        this.$router.push({ name: 'SingleTeam', params: { id: record.id } });
      }
    }
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }

  .table {
    width: 80%;
    margin-left: 10%;
  }
</style>