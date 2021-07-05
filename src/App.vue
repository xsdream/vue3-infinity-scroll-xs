<template>
  <div style="display: flex">
    <div style="width: 500px; height: 300px; border: 5px solid yellow">
      <infiniteScroll :deep="1" :resData="data.resData1">
        <template v-for="(item, index) in data.resData1" :key="index">
          <div class="list-item">
            <div class="item-name text-overflow" @click="console.log(1)">
              {{ item.name }}
            </div>
            <div class="item-road text-overflow">{{ item.road }}</div>
          </div>
        </template>
      </infiniteScroll>
    </div>

    <div style="width: 500px; height: 300px; border: 5px solid yellow">
      <infiniteScroll :deep="5" :resData="data.resData2">
        <template v-for="(item, index) in data.resData2" :key="index">
          <div class="list-item">
            <div class="item-name text-overflow" @click="console.log(1)">
              {{ item.name }}
            </div>
            <div class="item-road text-overflow">{{ item.road }}</div>
          </div>
        </template>
      </infiniteScroll>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const data = reactive({
      resData1: [
        { name: '123', road: 'abc', status: 0 },
        { name: '123', road: 'abc', status: 0 },
      ],
      resData2: [{ name: '123', road: 'abc', status: 0 }],
    });

    onMounted(() => {
      setTimeout(() => {
        data.resData2 = [
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
          { name: '123', road: 'abc', status: 0 },
        ];
      }, 1000);
    });

    return {
      data,
    };
  },
});
</script>

<style>
</style>
