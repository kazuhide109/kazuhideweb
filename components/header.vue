<template>
  <header class="header">
  <div class="head-content">
    <img src="../static/icon_alpha.svg" alt="Icon Image" class="image-size"> 
    <!-- <p>WW: {{ windowWidth }}px</p> -->
      <nav v-if="windowWidth > 800">
        <ul class="gnav">
          <li><nuxt-link to="/" active-class="active-list" exact>WORKS</nuxt-link></li>
          <li><nuxt-link to="/projects" active-class="active-list" exact>PROJECTS</nuxt-link></li>
          <li><nuxt-link to="/jobworks" active-class="active-list" exact>JOB WORKS</nuxt-link></li>
          <li><nuxt-link to="/about" active-class="active-list" exact>ABOUT</nuxt-link></li>
        </ul>
      </nav>
      <div v-else class="sp-nav-btn" @click="spNavClick">
        <img src="../static/menu.svg" alt="Icon Image" class="menu-size">
      </div>
    </div>
    </header>
</template>

<script>

export default {
  name: 'Header',

  props: ["spNavFlag"],

  data() {
    return {
      windowWidth: 0,
    }
  },
  methods: {
    updateWindowWidth() {
      if (process.client) {
      this.windowWidth = window.innerWidth;
      }
    },
    spNavClick() {
      this.$emit("clickSpNav");
    }
  },
  mounted() {
    if (process.client) {
      this.updateWindowWidth = this.updateWindowWidth.bind(this);
      window.addEventListener('resize', this.updateWindowWidth);
      this.updateWindowWidth(); // 初期表示時にウィンドウサイズを更新
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
}
</script>

<style scoped>
  .header{
    padding: 20px;
    margin-bottom: 10px;
  }

  .image-size {
    /* transform: transrate(20px 0px); */
    margin-left: -13px;
    width: 40px;
    height: 40px;
  }
  .menu-size {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .head-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }
  .gnav{
    display: flex;
  }
  .router-link-active, .router-link-exact-active {
    color: #000000;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style-type: none;
    margin-right: 30px;
    margin-left: 30px;
    color: #000000;
    font-family: "Kadwa";
    font-size: 12px;
    /* border-bottom: 2px solid; */
                                  
  }
  .active-list{
    border-bottom: 2px solid;
    color: #000000;
  }

  .sp-nav-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3rem;
}
    
</style>
