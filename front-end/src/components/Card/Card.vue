<template>
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
</template>

<script>
export default {
  name: 'Card',
};
</script>
