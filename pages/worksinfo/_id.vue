<template>
  <div class="content">
      <div  @click="$router.go(-1)">
        <div class="back_button">←Back</div>
      </div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="selectedItem">
      <div class="type-list">
        <div v-for="(item, tag) in selectedItem.tag" :key="tag">
          <div class="type-text">{{ item }}</div>
        </div>
      </div>

      <div class="title-text">
        {{ selectedItem.title }}
      </div>
      <img class="top_image" :src="selectedItem.mainimage?.url" :alt="selectedItem.title" />
      <div v-for="(item, tag) in selectedItem.subimages" :key="tag">
        <img class="top_image" :src="item?.url" :alt="selectedItem.title" />
      </div>

        <div v-if="selectedItem.team">
          <div class="topic-text">{{ selectedItem.team }}
          <div class="text">Role in Work: {{ selectedItem.role }}</div>
        </div>
      </div>

      <div class="line-container">
        <div class="vertical-line"></div>
      </div>

      <div class="text">{{ selectedItem.explaintext }}</div>
      <div class="line-container">
        <div class="vertical-line"></div>
      </div>
      <div class="section-text">Media</div>
      <div class="text">{{ selectedItem.media }}</div>
      
      <div class="section-text">Award/Exhibition</div>
      <div class="text">{{ selectedItem.awards }}</div>
      
      <div v-if="selectedItem?.youtube">
        <div v-if="videoId">
          <div class="line-container">
          <div class="vertical-line"></div>
        </div>
        <youtube
          :video-id=videoId :player-vars="{autoplay: 0}"
          player-width=100%
        />
        </div>
      </div>
      <div  @click="$router.go(-1)" class="back-button-pos">
        <div class="back_button2">←Back</div>
      </div>
    </div>
    <div v-else>
      <p>No item found</p>
    </div>
  
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { defineComponent } from 'vue';
import type { Blog } from '~/types/blog';

export default defineComponent({
  name: 'WorksInfo',

  data() {
    return {
      info_list: [] as Blog[],
      loading: true,
      selectedItem: null as Blog | null,
      currentLink: '',
      // videoId: '',
    };
  },

  async created() {
    this.currentLink = this.$route.fullPath;

    try {
      const response = await axios.get('https://kazuhideweb.microcms.io/api/v1/works', {
        headers: { 'X-API-KEY': 'WoLUkc21WyNHGKiWFuPoiQMzpK4b1W7uKYPf' },
        params: { limit: 100 },
      });
      const data = response.data;
      if (data && data.contents) {
        this.info_list = data.contents;
        const id = this.$route.params.id;
        this.selectedItem = this.getItemById(data, id) || null;
        // this.videoId = this.selectedItem?.youtube as string;
      } else {
        console.error('No contents found in the data');
      }
    } catch (error) {
      console.error('Error fetching data from MicroCMS:', error);
    } finally {
      this.loading = false;
    }
  },

  computed: {
    videoId(): string {
      return this.selectedItem?.youtube || '';
    }
  },

  methods: {
    getItemById(json: { contents: Blog[] }, id: string): Blog | undefined {
      return json.contents.find((item) => item.id === id);
    }
  },
});
</script>

<style scoped>
.type-text {
  font-size: 12px;
  font-family: 'Noto+Sans+JP';
  border: 1px solid #ccc;
  padding: 10px;
  text-decoration: none;
}

.type-list {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 20px; /* アイテム間のスペース */
  margin-bottom: 24px;
}

.title-text {
  font-size: 16px;
  font-family: 'Kadwa';
}

.topic-text {
  font-size: 16px;
  font-family: 'Kadwa';
  /* margin-bottom: 8px; */
  /* white-space: pre-wrap; */
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
}

.section-text {
  font-size: 16px;
  font-family: 'Kadwa';
  display: flex;
  flex: 1;
  margin-bottom: 5px;
  margin-top: 5px;
}

.text {
  font-size: 14px;
  font-family: 'Noto+Sans+JP';
  text-decoration: none;
  white-space: pre-wrap;
}

.top_image {
  width: 100%;
  height: 100%;
  justify-content: center;
  /* aspect-ratio: 2 / 1; */
  object-fit: contain;
  border-radius: 2px;
  display: flex;
  margin-top: 4px;
}

.sub_image {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
}



</style>
