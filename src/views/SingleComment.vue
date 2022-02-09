<template>
  <div>
    <b-row v-if="comment">
      <b-col>
          <ul>
              <li>Comment: {{ comment.comment }}</li>
              <li>Rating: {{ comment.rating }}</li>
              <li>Player: {{ comment.player.firstName }} {{ comment.player.lastName }}</li>
              <li>User: {{ comment.user.firstName }} {{ comment.user.lastName }}</li>
          </ul>
      </b-col>
      <b-col v-if="userId===comment.user.id">
        <div>
          <b-button variant="outline-dark" @click="editCom">Edit</b-button>  
          <b-button variant="outline-dark" @click="deleteCom">Delete</b-button>
        </div>
        <div v-if="isEdit">
          <div>
            <input type="text" v-model="rating" placeholder="Rating">
          </div>
          <div>
            <textarea type="text" v-model="comment" placeholder="Comment"></textarea>
          </div>
          <div>
            <b-button variant="outline-dark" @click="submitEdit">Submit</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';
  import jwt_decode from "jwt-decode";

  export default {
    name: 'SingleComment',

    components: {

    },

    data() {
      return {
        isLogged: false,
        userId: 0,
        isEdit: false
      }
    },

    computed: {
      ...mapState([
        'comment'
      ])
    },
    
    methods: {
      ...mapActions([
        'loadCommentById', 'deleteComments'
      ]),
      deleteCom() {
        this.deleteComments(this.$route.params.id);
        this.$router.push({ name: 'Home' });
      },
      editCom() {
        this.isEdit = true;
      },
      submitEdit() {
        
      }
    },

    mounted() {
      this.loadCommentById(this.$route.params.id);
      if (localStorage.token !== "") {
        this.isLogged = true;
        var decoded = jwt_decode(localStorage.token);
        this.userId = decoded.userId;
      }
    }
  }

</script>