<template>
  <h2 class="display-3 mt-2">Result: {{ text.length }} stages</h2>
  <button class="btn btn-primary" @click="handleClick">Show all</button>
  <div v-if="text.length" class="container">
    <div class="accordion">
      <div class="card" v-for="(stage, index) in pipelineStage" :key="index">
        <div class="card-header">
          <h2 class="mb-0">
            <button
              type="button"
              class="btn btn-link btn-block text-left"
              data-toggle="collapse"
              :data-target="getDataTarget(index)"
            >
              {{ index + 1 }}. {{ stage }}
            </button>
          </h2>
        </div>
        <div :class="cardBodyClass" :id="getId(index)">
          <div class="card-body">
            <p style="white-space: pre-wrap">{{ text[index] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      cardBodyClass: {
        collapse: true,
        show: false,
      },
    };
  },
  props: {
    text: Array,
  },
  methods: {
    getId(index) {
      return `stage-${index}`;
    },
    getDataTarget(index) {
      return `#${this.getId(index)}`;
    },
    handleClick() {
      this.cardBodyClass.show = !this.cardBodyClass.show;
    },
  },
  computed: {
    pipelineStage() {
      return this.text.map((item) => Object.keys(item)[0]);
    },
  },
};
</script>
