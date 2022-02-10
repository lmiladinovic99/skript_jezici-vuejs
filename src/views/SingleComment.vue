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
            <input type="text" v-model="rating" placeholder="Rating" required>
          </div>
          <div>
            <textarea type="text" v-model="commentt" placeholder="Comment" required></textarea>
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

    props: {
        rating: {
            type: Number,
            default: 0
        },
        commentt: {
            type: String,
            default: ''
        }
    },

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
        'loadCommentById', 'deleteComments', 'changeComment', 'newComment'
      ]),
      deleteCom() {
        this.deleteComments(this.$route.params.id);
        this.$router.push({ name: 'Comments' });
      },
      editCom() {
        this.isEdit = true;
      },
      submitEdit() {
        this.deleteComments(this.$route.params.id);
        //this.$router.push({ name: 'Home' });
        const comment = JSON.stringify({userId: this.userId, playerId: this.comment.playerId,
                                       rating: this.rating, comment: this.commentt});
        this.newComment(comment);
        this.$router.push({ name: 'Comments' });
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