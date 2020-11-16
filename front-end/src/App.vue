<template>
  <div class="container-fluid">
    <Toasts :toasts="toasts" @hide-toast="handleHideToasts" />
    <h1 class="display-1">Mongo Aggregate Splitter</h1>
    <button class="btn btn-danger" @click="handleClick">Testing</button>
    <JsonForm @parse-json="parseJson" :isInvalid="isInvalid" />
    <Result :text="this.splittedJson" />
  </div>
</template>

<script>
import $ from 'jquery';
import Result from './components/Result/Result.vue';
import JsonForm from './components/JsonForm/JsonForm.vue';
import Toasts from './components/Toasts/Toasts.vue';
// import testData from './samples/sampleJson.json';
import Toast from './templates/Toast';

export default {
  name: 'App',
  data() {
    return {
      splittedJson: '',
      toasts: [],
      isInvalid: false,
    };
  },
  components: { JsonForm, Result, Toasts },
  mounted() {},
  methods: {
    parseJson(jsonText) {
      try {
        this.splittedJson = JSON.parse(jsonText);
      } catch (e) {
        if (e.name === 'SyntaxError') {
          this.toasts.push(new Toast(e.name, 'Invalid JSON', null, 'error'));
          this.isInvalid = true;
        }
      }
    },
    handleClick() {
      $('.toast').toast({ delay: 2000 });
      $('.toast').toast('show');
    },
    handleHideToasts(index) {
      this.toasts[index] = null;
      this.toasts = this.toasts.filter((toast) => toast);
    },
  },
};
</script>
