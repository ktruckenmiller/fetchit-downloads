
<template lang="html">
  <li class="ahref">

    <a :href="link">
      {{name}}
    </a>
  </li>
</template>

<script>
export default {
  name: 'Href',
  props: ['file'],
  computed: {
    name() {
      return this.file.Key.split('/')[2];
    },
    link() {
      return `https://s3.amazonaws.com/fetchit/${this.file.Key}`;
    },
  },
};
</script>

<style lang="scss">
.ahref {
  a {
    &:hover {
      color: #80CBC4;
    }
  }
}
</style>
