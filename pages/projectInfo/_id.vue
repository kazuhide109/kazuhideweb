<template>
  <div class="content">
    <div>
      <div  @click="$router.go(-1)" class="type-list">
        <div class="back_button">←Back</div>
      </div>
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      
      <div v-else-if="selectedItem">
        <div class="title-text">{{ selectedItem.title }}</div>
        <img class="top_image" :src="selectedItem.image?.url" :alt="selectedItem.title" />
        <div class="line-container">
          <div class="vertical-line"></div>
        </div>
        <div class="text">{{ selectedItem.text}}</div>
        <div class="line-container">
          <div class="vertical-line"></div>
        </div>
        <a :href="selectedItem.url" target="_blank" rel="noopener noreferrer">
          <div class="web-btn-line">
            <div class="web-btn-text">Jump to Website</div>
          </div>
        </a>
        <div  @click="$router.go(-1)" class="back-button-pos">
            <div class="back_button2">←Back</div>
          </div>
      </div>
    </div>
  </div>
    
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { defineComponent } from 'vue';
import type { Prj } from '~/types/projects';

export default defineComponent({
  name: 'ProjectsInfo',

  data() {
    return {
      info_list: [] as Prj[],
      loading: true,
      selectedItem: null as Prj | null,
      currentLink: '',
      videoId: 'Ifq46wM8jSA',
    };
  },

  async created() {
    this.currentLink = this.$route.fullPath;

    try {
      const response = await axios.get('https://kazuhideweb.microcms.io/api/v1/projects', {
        headers: { 'X-API-KEY': 'WoLUkc21WyNHGKiWFuPoiQMzpK4b1W7uKYPf' },
        params: { limit: 100 },
      });
      const data = response.data;
      if (data && data.contents) {
        this.info_list = data.contents;
        const id = this.$route.params.id;
        this.selectedItem = this.getItemById(data, id) || null;
        // this.videoId = this.selectedItem.youtube;
      } else {
        console.error('No contents found in the data');
      }
    } catch (error) {
      console.error('Error fetching data from MicroCMS:', error);
    } finally {
      this.loading = false;
    }
  },

  methods: {
    getItemById(json: { contents: Prj[] }, id: string): Prj | undefined {
      return json.contents.find((item) => item.id === id);
    }
  },

});

</script>

<style scoped>
.title-text {
  font-size: 16px;
  font-family: 'Kadwa';
}

.top_image {
  width: 100%;
  height: 100%;
  justify-content: center;
  aspect-ratio: 4 / 3;
  object-fit: cantain;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  margin-top: 4px;
}

.text {
  font-size: 14px;
  font-family: 'Noto+Sans+JP';
  text-decoration: none;
  line-height: 24px;
  white-space: pre-wrap;
  /* margin-bottom: 30px; */
}

.web-btn-line {
  display: flex;
  /* position: absolute; */
  height: 10%;
  width: 98%;
  opacity: 1;
  transition: .5s ease;
  /* background-color: rgba(216, 216, 216, 0.5); */
  border: 1px solid #000000;
  display: flex;
  cursor: pointer;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* margin-right: 60px; */
}

.web-btn-text{
  padding: 40px;
  font-size: 12px;
  font-family: "Kadwa";
  white-space: pre-wrap;
  text-decoration: none;
  color: rgb(0, 0, 0);
  list-style-type: none;
}
</style>