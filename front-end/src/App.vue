<template>
  <div class="container-fluid">
    <h1 class="display-1">Mongo Aggregate Splitter</h1>
    <JsonForm @parse-json="parseJson" />
    <Result :text="this.splittedJson" />
  </div>
</template>

<script>
import Result from './components/Result/Result.vue';
import JsonForm from './components/JsonForm/JsonForm.vue';

export default {
  name: 'App',
  data() {
    return {
      splittedJson: [],
    };
  },
  components: { JsonForm, Result },
  methods: {
    parseJson(jsonText) {
      try {
        this.splittedJson = JSON.parse(jsonText);
      } catch (e) {
        if (e.name === 'SyntaxError') {
          console.error('Invalid Json');
        }
      }
    },
  },
};
</script>
