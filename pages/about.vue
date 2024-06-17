<template>
  <div class="content">
    <img src="../static/selfImage.png" alt="Icon Image" class="image-size" /> 
    <div v-for="name in about" :key="name.name">
      <div class="text">Name: {{name.name.JP }} / {{ name.name.EN }} </div>
      <div class="text">Born: {{ name.Born }} </div>
      <div class="text">Country: {{name.Country }}</div>
      <div class="text">Activity base: {{name.Activitybase }} </div>
    </div>
    <div class="space" />

    <div class="topic-text">Common Use Applications</div>
    <!-- <div class="small-space" /> -->
    <div class="title-text">System Development</div>
    <div class="line-list">
      <div class="text" v-for="list in about[0]?.apps?.system" :key="list">
        ・{{ list }}
      </div>
    </div>

    <div class="title-text">3D Modeling</div>
    <div class="line-list">
      <div class="text" v-for="list in about[0]?.apps?.modeling" :key="list">
      ・{{ list }}
      </div>
    </div>
    <div class="title-text">Movie Making</div>
    <div class="line-list">
      <div class="text" v-for="list in about[0]?.apps?.movie" :key="list">
      ・{{ list }}
      </div>
    </div>
    <div class="title-text">Sound Create</div>
    <div class="line-list">
      <div class="text" v-for="list in about[0]?.apps?.sound" :key="list">
      ・{{ list }}
      </div>
    </div>
    <div class="space" />
    <div class="topic-text">Awards</div>
    <div class="small-space" />
    <div class="text" v-for="award in about[0]?.Awards" :key="award.title">
      <a :href="award.url" target="_blank" class="url-link">{{ award.title }}</a> <br>
    </div>
    <div class="space" />
    <div class="topic-text">Education and Career</div>
    <div class="text" v-for="career in about[0]?.Career" :key="career.title">
      <strong>{{ career.year }}</strong>
      <br>
      <a :href="career.url" target="_blank" class="url-link">{{ career.title }}</a> <br>
    </div>
    <div class="space" />
    <div class="topic-text">Contact</div>
    <div class="plane-text">bashitta@gmail.com</div>

  </div>
</template>

<script>

export default {
  name: 'AboutPage',

  data() {
    return {
      about: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        console.log('Fetching data...');  // データ取得開始のログ
        const response = await fetch('/about.json')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json()
        this.about = data
        console.log('Data loaded successfully:', data);
      } catch (error) {
        console.error('データの取得中にエラーが発生しました:', error)
      }
    }
  }
}
</script>

<style scoped>


.topic-text{
  font-size: 16px;
  font-family: "Kadwa";
  margin-bottom: 8px;
  /* white-space: pre-wrap; */
}

.title-text{
  font-size: 16px;
  font-family: "Noto+Sans+JP";
  margin-bottom: 2px;
  /* margin-top: 22px; */
  /* white-space: pre-wrap; */
}

.text{
  font-size: 14px;
  font-family: "Noto+Sans+JP";
  text-decoration: none;
}

.space {
  height: 30px;
  margin-left: 20px; /* 回転テキストの幅に応じて調整 */
  padding-left: 100px; /* 回転テキストの幅に応じて調整 */
  flex-grow: 1;
  /* background: red; */
}

.image-size {
  width: 200px;
  height: 200px;
}
.line-list {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 20px; /* アイテム間のスペース */
  margin-bottom: 16px;
  /* line-height: 10px; */
}
.url-link {
  color: rgb(61, 61, 61);
  text-decoration: underline;
  font-size: 13px;
}
.small-space {
  height: 12px;
  flex-grow: 1;
  /* background: red; */
}
</style>
