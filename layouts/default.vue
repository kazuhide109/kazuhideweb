<template>
  <div class="layout">
    <Header @clickSpNav="clickSpNav" :spNavFlag="spNavFlag" />
    <div v-if="spNavFlag" class="spnav-overlay" @click="clickSpNavClose">
    <div v-if="spNavFlag" class="spnav-container">
      <Spnav @clickSpNave="clickSpNav" />
    </div>
  </div>
    <div class="rotated-text">KAZUHIDE SHIBATA</div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
// import Header from "../components/header.vue";

export default {
  data() {
    return {
      spNavFlag: false
    };
  },
  component: {
    // Header
  },
  methods: {
    clickSpNav() {
      this.spNavFlag = !this.spNavFlag;
    },
    clickSpNavClose() {
      this.spNavFlag = !this.spNavFlag;
    }
  },
  watch: {
    $route() {
      if (this.spNavFlag) {
        this.spNavFlag = false;
      }
    }
  }
};
</script>

<style>
html, body, #__nuxt {
  height: 100%;
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
}
.rotated-text {
  position: absolute;
  left: 0;
  top: 50px;
  transform: rotate(90deg) translateY(-40%);
  transform-origin: left bottom;
  white-space: nowrap;
  color: black;
  font-size: 20px;
  letter-spacing: 25px;
  font-family: "Kadwa";
}

.spnav-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.spnav-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>