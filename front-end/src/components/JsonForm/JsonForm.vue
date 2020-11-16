<template>
  <form @submit.prevent="handleSubmit()" class="container">
    <div class="form-group">
      <label for="json-textarea">Paste your JSON here</label>
      <textarea
        :class="{ 'form-control': true, 'is-invalid': isInvalid }"
        :value="jsonText"
        id="json-textarea"
        @change="handleChange"
        name="json-textarea"
        cols="30"
        rows="10"
      />
    </div>
    <button class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'JsonForm',
  data() {
    return {
      jsonText: '',
    };
  },
  props: {
    isInvalid: Boolean,
  },
  methods: {
    handleSubmit() {
      this.$emit('parse-json', this.jsonText);
    },
    handleChange({ target }) {
      this.jsonText = target.value;
    },
  },
};
</script>
