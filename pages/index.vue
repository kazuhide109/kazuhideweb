<template>
  <div>
    <works />
  </div>
</template>

<script setup>
// import About from "~/pages/about.vue";
import works from "~/pages/works.vue";

const ws = [
  { id: 'a', title: 'Work A' },
  { id: 'b', title: 'Work B' },
  // 他の作品
];

</script>

<style>
.content {
  margin-left: 20px; /* 回転テキストの幅に応じて調整 */
  padding-left: 100px; /* 回転テキストの幅に応じて調整 */
  flex-grow: 1;
  margin-right: 0px;
  /* background: red; */
}

.vertical-line {
  display: flex;
  width: 1px;
  height: 40px;
  background-color: black;
  /* margin: 0 100px; 縦線の左右のスペースを調整 */
  margin-top: 20px;
  margin-bottom: 20px;
}

.line-container {
  display: flex;
  justify-content: center;
}

.back_button {
  font-size: 10px;
  font-family: 'Kadwa';
  color:rgb(139, 139, 139);
  border: 1px solid #a8a8a8;
  padding-left: 12px;
  padding-right: 80px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  margin-bottom: 25px;
}

.back_button2 {
  font-size: 10px;
  font-family: 'Kadwa';
  border: 1px solid #ccc;
  padding-left: 12px;
  padding-right: 80px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  margin-top: 25px;
}

.back-button-pos {
  padding: 20px;
  display: flex;
  flex: 1;
  align-content: right;
  flex-direction: wrap;
  justify-content: flex-end;
}

</style>
