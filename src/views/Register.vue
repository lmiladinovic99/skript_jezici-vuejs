<template>
  <div id="app">
    <b-container>
      <h3>Register</h3>
      <b-form @submit="onSubmit">
        <b-form-group label="First name:" label-for="firstName">
          <b-form-input id="firstName" v-model="form.firstName" type="text" placeholder="First name" required></b-form-input>
        </b-form-group>

        <b-form-group label="Last name:" label-for="lastName">
          <b-form-input id="lastName" v-model="form.lastName" type="text" placeholder="Last name" required></b-form-input>
        </b-form-group>

        <b-form-group label="Username:" label-for="username">
          <b-form-input id="username" v-model="form.username" type="text" placeholder="Username" required></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" v-model="form.password" type="password" placeholder="Password" required></b-form-input>
        </b-form-group>
        
        <br>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    
    components: {
    
    },

    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          role: "korisnik"
        }
      }
    },

    methods: {
      ...mapActions([
        'register'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.register(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
