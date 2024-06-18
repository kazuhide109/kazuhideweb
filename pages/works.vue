
<template>
  <div class="content">
    <div class="plane-text" style="white-space: pre-wrap;">{{ explain }}</div>
    <div class="line-container">
      <div class="vertical-line"></div>
    </div>

    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
        <div v-if="info_list.length">
          <div v-for="(item, index) in info_list" :key="index" class="thumbnail-wrapper">
            <nuxt-link :to="`/worksinfo/${item?.id}`">
              <img :src="item.mainimage?.url" :alt="item?.title" class="thumbnail-list__img"/>
              <div class="overlay">
                <div class="over-text">
                  {{ item.title }}
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div v-else>
          <p>No images available.</p>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import type { Blog } from "../types/blog";
import axios from 'axios';

export default {
  name: 'WorksInfo',
  setup() {
    const info_list = ref<Blog[]>([]);
    const loading = ref(true);
    const explain = '映像を「撮る、編集する、見る」過程や仕組みを主なテーマに視覚表現を行っています\nI am making visual expressions based on the process and mechanism of “shooting, editing, and viewing” as the main starting point of my ideas.';

    console.log('microcms-----');

    const fetchData = async () => {
      try {
        const response = await axios.get('https://kazuhideweb.microcms.io/api/v1/works', {
          headers: { 'X-API-KEY': 'WoLUkc21WyNHGKiWFuPoiQMzpK4b1W7uKYPf' },
          params: { limit: 100 }
        });
        const data = response.data;
        if (data && data.contents) {
          info_list.value = data.contents;
        } else {
          console.error('No contents found in the data');
        }
      } catch (error) {
        console.error('Error fetching data from MicroCMS:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchData);

    return {
      info_list,
      loading,
      explain
    };
  }
};
</script>

<style>

.container {
  display: flex;
  flex-direction: column;
}

.picup-text{
  font-size: 20px;
  font-family: "Kadwa";
  white-space: pre-wrap;
}

.thumbnail-list {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
}

.thumbnail-list__img {
  width: 100%;
  height: 100%;
  justify-content: center;
  aspect-ratio: 6 / 1;
  object-fit: cover;
  border-radius: 2px;
  cursor: pointer;
  /* background: green; */
  display: flex;
  margin-top: 4px;
}

.content-item {
  margin-bottom: 2px;
}

.thumbnail-wrapper {
  position: relative;
  /* display: flex; */
  flex: 2;
  justify-content: flex-end;
  /* background: rgb(0, 2, 128); */
  
}
.overlay {
  /* display: flex; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;
}
.thumbnail-wrapper:hover .overlay {
  opacity: 1;
}
.over-text{
  font-size: 12px;
  font-family: "Noto+Sans+JP";
  white-space: pre-wrap;
  /* line-height: 28px; */
  text-decoration: none;
  color: white;
}

</style>