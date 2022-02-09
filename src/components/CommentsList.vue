<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="comments.length"
      :per-page="perPage"
      aria-controls="comments-table"
    ></b-pagination>
    <b-table
      id="comments-table"
      hover 
      fixed
      v-if="comments.length" 
      sticky-header="800px"
      :items="comments"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      head-variant="light"
    >
    </b-table>
    <h1 v-else>No comments</h1>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'CommentsList',

    data() {
      return {
        fields: [
            { key: 'id' },
            { key: 'user.username' },
            { key: 'player.firstName' },
            { key: 'player.lastName' },
            { key: 'rating' },
            { key: 'comment' }
        ],
        currentPage: 1,
        perPage: 5
      }
    },

    computed: {
      ...mapState([
        'comments'
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