<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'nav-bar',
  computed: {
    ...mapState('users', ['users', 'activeTab']),
    ...mapGetters('users', ['selectedUser']),
  },
}
</script>

<template >
  <nav class="navbar" >
    <router-link to="/">
      <span class='Logo'>Жилфонд</span>
    </router-link> 
      <p class='user' v-if="selectedUser" >{{selectedUser.username}}</p>
  </nav>
</template>

<style lang="scss">
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    @media (min-width: 768px) {
      font-size: 32px;
    }
    @media (min-width: 320px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .Logo {
    color: rgba(227, 31, 36,  1.0);
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 700;
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  .user {
    margin-top: 7px;
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 16px;
      margin-top: 0;
    }
  }
  
</style>