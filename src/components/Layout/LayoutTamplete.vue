<script>
export default {
  name: 'layout-tamplate', 
}
</script>

<template>
  <div class="App">
      <nav-bar></nav-bar>
      <div class="home">
        <div class="home-col-1"><SideBar/></div>
        <div class="home-col-2"><UserContent/></div>
      </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  .App {
    max-width: 1366px;
    margin: 0 auto;
    padding: 20px 20px 30px 20px;
    @media (min-width: 768px) {
      padding: 26px 40px 58px 40px;
    }
  }

  .home {
    display: flex;
    flex-direction: column;
    background: rgb(253, 253, 253);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;  
    min-height: 80vh;
    margin-top: 10px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .home-col-1 {
    flex: 0 0 290px;
    border-bottom: 1px solid rgb(224, 224, 224);
    @media (min-width: 768px) {
      border-right: 1px solid rgb(224, 224, 224);
    }
  }
  .home-col-2 {
    flex: 1 1 auto;
  }
</style>