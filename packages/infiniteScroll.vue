<template>
  <div ref="wraplist" class="doron-list-container">
    <div class="doron-marquee" :style="{ animationDuration: `${data.speed}s` }">
      <div ref="slot">
        <slot></slot>
      </div>
      <div v-if="data.showSecondSlot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue';
export default defineComponent({
  name: 'infiniteScroll',
  props: {
    resData: {
      type: Array,
      default: [],
    },
    deep: {
      type: Number,
      default: 10, //滚动时间
      validator(type) {
        if (type < 0 || type > 10) {
          throw 'infiniteScroll deep：只允许0-10之间值';
        }
      },
    },
  },
  setup(props, { slots }) {
    const wraplist = ref(null);
    const slot = ref(null);

    const data = reactive({
      showSecondSlot: false,
      speed: 0,
    });

    watch(
      () => props.resData,
      (n) => {
        setTimeout(() => {
          refreshLayot()
        }, 500);
      },
    );

    function refreshLayot() {
      const w_h = wraplist.value.offsetHeight;
      const d_h = slot.value.offsetHeight;
      // 高度小于容器高度，不滚动
      if (d_h < w_h) {
        data.speed = 0;
      } else {
        data.showSecondSlot = true;
        data.speed = (d_h / w_h) * (11 - props.deep);
      }
    }

    onMounted(() => {
      refreshLayot()
    });
    return {
      wraplist,
      slot,
      data,
      refreshLayot
    };
  },
});
</script>
