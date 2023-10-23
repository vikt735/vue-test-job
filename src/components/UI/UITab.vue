<script>
export default {
  name: 'ui-tab',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <li class='link' @click="$emit('preview', user.id)">
    <div class='link-col-1'><img src="@/assets/img/imgLink.png" alt="logo" class="img" /></div>
    <div class='link-col-2'>
      <div class="tab-user">
        <p class="username">{{user.username[0].toUpperCase() + user.username.slice(1) }}</p>
        <p>{{user.email }}</p>
      </div>
    </div>
  </li>
</template>


<style lang="scss" scoped>
  .link {
    display: flex;
    min-height: 70px;
    width: 220px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 18px;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    .link-col-1 {
    width: 70px;
    }

  .link-col-2 {
    width: 170px;
    padding: 7px 15px 7px 10px;
    }
    &.active .link-col-2 {
      background: rgb(224, 224, 224);
      border-radius: 0 10px 10px 0;
      
    }
    &.active .link-col-1 {
      border: 1px solid rgb(224, 224, 224);
      border-radius: 10px 0 0 10px;
    }
    @media (min-width: 768px) {
      width: 240px;
    }
  }
  
  .img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .tab-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .username {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .email {
    font-size: 14px;
  }
</style>