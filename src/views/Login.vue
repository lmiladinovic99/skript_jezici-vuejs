<template>
  <div id="app">
    <b-container>
        <h3>Log In</h3>
        <b-form @submit="onSubmit">
        <b-form-group label="Username:" label-for="username">
            <b-form-input id="username" v-model="form.username" type="text" placeholder="Username" required></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
            <b-form-input id="password" v-model="form.password" type="password" placeholder="Password" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </b-container>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Login',
    
    components: {
      
    },

    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },

    methods: {
      ...mapActions([
        'login'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.login(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
