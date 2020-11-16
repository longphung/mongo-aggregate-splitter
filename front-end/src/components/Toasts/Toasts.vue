<template>
  <div class="container-fluid position-fixed mt-3 pr-5">
    <div
      class="toast ml-auto fade hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-for="(toast, index) in toasts"
      :key="index"
      :id="getToastId(index)"
    >
      <div :class="['toast-header', getToastHeaderClass(toast.type)]">
        <strong class="mr-auto">{{ toast.header }}</strong>
        <small>{{ toast.time }}</small>
        <button
          type="button"
          :class="['ml-2 mb-1 close', toast.type ? 'text-white' : '']"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">{{ toast.body }}</div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Toast from '../../templates/Toast';

export default {
  name: 'Toast',
  props: {
    toasts: {
      type: Array,
      validator: (values) => values.every((value) => value instanceof Toast),
    },
  },
  updated() {
    $('.toast').toast({ delay: 2000 });
    $('.toast').toast('show');
    $('.toast').on('hidden.bs.toast', this.handleHiddenToasts);
  },
  methods: {
    getToastHeaderClass(type) {
      switch (type) {
        case 'error':
          return 'bg-danger text-white';
        case 'primary':
          return 'bg-primary text-white';
        default:
          return '';
      }
    },
    getToastId(index) {
      return `toast-${index}`;
    },
    handleHiddenToasts(event) {
      const reg = /toast-(\d+)/g;
      this.$emit('hide-toast', event.target.id.replace(reg, '$1'));
    },
  },
};
</script>
