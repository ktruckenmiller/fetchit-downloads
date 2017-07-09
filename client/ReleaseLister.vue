<template lang="html">
  <div class="release_wrap">
    <PlatformLister v-for="platform in platforms" :release="release" :platform="platform" :key="platform+release"></PlatformLister>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

import PlatformLister from './PlatformLister'
export default {
  name: 'ReleaseLister',
  props: ['prefix'],
  data () {
    return {
      empty: true,
      platforms: [
        'windows',
        'linux',
        'mac'
      ]
    }
  },
  computed: {
    release () {
      return this.prefix
    }
  },
  components: {PlatformLister}
}
</script>

<style lang="scss">
.release_wrap {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    flex: 1;
  }
}
</style>
