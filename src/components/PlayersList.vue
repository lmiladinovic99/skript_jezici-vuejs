<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="players.length"
      :per-page="perPage"
      aria-controls="players-table"
    ></b-pagination>
    <b-table
      id="players-table"
      hover 
      fixed
      v-if="players.length" 
      sticky-header="800px"
      :items="players"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      head-variant="light"
    >
    </b-table>
    <h1 v-else>No players</h1>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'PlayersList',

    data() {
      return {
        fields: [
            { key: 'id' },
            { key: 'team.name' },
            { key: 'firstName' },
            { key: 'lastName' },
            { key: 'number' }
        ],
        currentPage: 1,
        perPage: 5
      }
    },

    computed: {
      ...mapState([
        'players'
      ])
    },

    watch: {
      
    },

    mounted() {
  
    },

    methods: {
      ...mapActions([
        
      ]),

      // rowClicked(record, index) {
      //   this.$router.push({ name: 'Single', params: { id: record.objectID } });
      // }
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