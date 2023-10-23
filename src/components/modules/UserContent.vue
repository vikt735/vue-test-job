<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'user-content',
  data: () =>( {
    text: 'Выберите сотрудника, чтобы посмотреть его профиль',
  }),
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    ...mapState('users', ['users', 'activeTab']),
    ...mapGetters('users', ['selectedUser']),
  },
}
</script>

<template>
  <div :class="{wrapper: activeTab, wrapperNew: !activeTab }" >
    <p v-if="!activeTab" class="'choice">{{text}}</p>
    <div v-if="activeTab" class="row" id="tabId">
      <div class="col-1">
        <div class="wrapper-img">
          <img class="img" src="@/assets/img/ImgUser.png" alt="user foto" />
        </div>
      </div>
      <div class="col-2">
        <p class="name m-b-10">{{ selectedUser.name }}</p>
        <p class="m-b-10"><span class="label ">email:</span><span>{{ selectedUser.email}}</span></p>
        <p class="m-b-20"><span class="label ">phone:</span><span>{{ selectedUser.phone }}</span></p>
        <article class="description">
          <p class="description-label m-b-25 name">О себе:</p>
          <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    padding: 30px 21px;
  }

  .wrapperNew {
    padding: 30px 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .choice {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: rgb(118, 120, 125);
  }
  .row {
    display: flex;
    flex-direction: column;
    gap: 60px;
    &.col-1, .col-2 {
      width: 100%;
      @media (min-width: 1200px) {
        width: calc(100% / 2);
      }  
    }

    @media (min-width: 1200px) {
      flex-direction: row;
    }

  }
  .wrapper-img {
    max-width: 220px;
    @media (min-width: 768px) {
      max-width: 424px;
    }
    img {
      width: 100%;
    }
  }
  .m-b-25 {
    margin-bottom: 25px;
  }
  .m-b-10 {
    margin-bottom: 10px;
  }
  .m-b-20 {
    margin-bottom: 20px;
  }
  .name {
    font-size: 16px;
    font-weight: 600;
  }
  .label {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
  }
  .description {
    max-width: 440px;
  }

</style>

