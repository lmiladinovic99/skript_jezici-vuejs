<template>
  <div>
    <b-row>
        <div>
          <h1 v-if="player">{{ player.firstName }} {{ player.lastName }} {{ player.number }}  {{ player.team.name }}</h1>
        </div>
        <div>
          <b-button variant="outline-dark" @click="addComment">Add Comment</b-button>
        </div>
        <div v-if="isAdd">
          <div>
            <input type="text" v-model="rating" placeholder="Rating" required>
          </div>
          <div>
            <textarea type="text" v-model="comment" placeholder="Comment" required></textarea>
          </div>
          <div>
            <b-button variant="outline-dark" @click="submitAdd">Submit</b-button>
          </div>
        </div>
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
  import jwt_decode from "jwt-decode";
  import Joi from 'joi';

  const sema = Joi.object().keys({
    rating: Joi.number().min(1).max(10).required(),
    comment: Joi.string().min(5).max(700).required()
  });

  export default {
    name: 'SinglePlayer',
    props: {
        rating: {
            type: Number,
            default: 0
        },
        comment: {
            type: String,
            default: ''
        }
    },

    components: {

    },

    data() {
      return {
        isAdd: false,
        userId: 0
      }
    },

    computed: {
      ...mapState([
        'player', 'comments'
      ])
    },
    
    methods: {
      ...mapActions([
        'loadPlayerById', 'newComment'
      ]),
      addComment() {
        this.isAdd = true;
      },
      submitAdd() {
        let { error } = sema.validate({rating: this.rating, comment: this.comment});
        const comment = JSON.stringify({userId: this.userId, playerId: this.player.id,
                                       rating: this.rating, comment: this.comment});
        if (error) {
          alert(error);
        }
        else{
          this.newComment(comment);
          this.$router.go();
        }
      }
    },

    mounted() {
      this.loadPlayerById(this.$route.params.id);
      if (localStorage.token !== "") {
        this.isLogged = true;
        var decoded = jwt_decode(localStorage.token);
        this.userId = decoded.userId;
      }
    }
  }

</script>