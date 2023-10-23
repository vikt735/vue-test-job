<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'side-bar',
  computed: {
    ...mapState('users', ['users', 'isLoading', 'searchQuery', 'activeTab', 'notFoundText', 'isError']),
  },
  methods: {
    ...mapActions('users', [ 'selectUser', 'fetchUsers']),
  },
  
}
</script>
<template>
  <aside class='sidebar'>
    <p class='search-title'>Поиск сотрудников</p>
    <form @submit.prevent>
      <UIInput :modelValue="searchQuery" @update:modelValue="fetchUsers" /> 
    </form>
    <p class='search-title result'>Результаты</p>
    <p v-if="searchQuery === '' && !notFoundText" class="list">начните поиск </p>
    <ul v-else>
      <li v-if="isLoading" class="list isLoading"><UILoading /></li>
      <li v-else-if="isError" class="list error">{{isError}}</li>
      <li v-else-if="notFoundText" class="list">{{notFoundText}}</li>
    <transition-group v-else name="list">
        <UITab   
          v-scroll="{ selector: '#tabId' }"
          v-for="user in users" 
          :key="user.id" 
          :user="user" 
          @preview="selectUser(user.id)"
          :class="{ active: activeTab === user.id }" />
      </transition-group>
      
    </ul>
  </aside>
</template>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 27px 20px 20px 20px;
      @media (min-width: 768px) {
      padding: 27px 20px 20px 30px;
    }
  }

  .search-title {
    margin-bottom: 14px;
    font-size: 16px;
    font-weight: 600;
  }
  .error {
    font-size: 14px;
    color: rgba(227, 31, 36,  1.0);
  }
  .result {
    margin: 28px 0  18px 0;
  }
  .list {
    margin-bottom: 20px;
  }

  .isLoading {
    display: flex;
    justify-content: center;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>