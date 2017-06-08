<template lang="html">
  <li>

    <a :href="link">
      {{name}}
    </a>
  </li>
</template>

<script>
export default {
  name: 'Href',
  props: ['object'],
  computed: {
    name() {
      return this.object.Key.split('/')[2];
    },
    link() {
      return `https://s3.amazonaws.com/fetchit/${this.object.Key}`;
    },
  },
};
</script>

<style lang="css">
</style>
