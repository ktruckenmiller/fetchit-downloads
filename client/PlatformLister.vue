<template lang="html">
  <div class="platform_wrap">
    <h2>{{platform}}</h2>
    <transition name="fade">
      <div v-if="!loaded" class="loading_wrapper">
        <span class="loading"></span>
      </div>
    </transition>

    <transition-group name="fade" tag="ul">
      <Href v-if="loaded" :file="file" v-for='file in files' :key="file"></Href>
    </transition-group>
    <div class="nothing_here" v-if="loaded && isEmpty">
      nothing uploaded yet
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Href from './Href'
import { isEmpty } from 'lodash'
export default {
  name: 'PlatformLister',
  props: ['release', 'platform'],
  data () {
    return {
      files: [],
      loaded: false
    }
  },
  computed: {
    isEmpty () {
      return isEmpty(this.files)
    }
  },
  created () {
    console.log("on created");
    this.getFiles()
  },
  methods: {
    async getFiles () {
      let res = await axios.get(`/s3/${this.release}/${this.platform}`)
      this.files = res.data.Contents
      this.loaded = true;
    }
  },
  components: {Href}
}
</script>

<style lang="scss">
.platform_wrap {
  position: relative;
  background-color: rgba(123,123,123,.2);
  padding:10px;
  margin:10px;
  > h2 {
    font-size: 20px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    min-height: 100px;
  }
}
.nothing_here {
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%);
  opacity: .3;
}
.loading_wrapper {
  position:relative;
  top: 40px;
}
.loading,
.loading::before,
.loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.4);
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
}

.loading {
  margin: -25px 0 0 -25px;
  height: 50px;
  width: 50px;
  -webkit-animation: animation-rotate 1000ms linear infinite;
  -moz-animation: animation-rotate 1000ms linear infinite;
  -o-animation: animation-rotate 1000ms linear infinite;
  animation: animation-rotate 1000ms linear infinite;
}

.loading::before {
  content: "";
  margin: -23px 0 0 -23px;
  height: 44px;
  width: 44px;
  -webkit-animation: animation-rotate 1000ms linear infinite;
  -moz-animation: animation-rotate 1000ms linear infinite;
  -o-animation: animation-rotate 1000ms linear infinite;
  animation: animation-rotate 1000ms linear infinite;
}

.loading::after {
  content: "";
  margin: -29px 0 0 -29px;
  height: 56px;
  width: 56px;
  -webkit-animation: animation-rotate 2000ms linear infinite;
  -moz-animation: animation-rotate 2000ms linear infinite;
  -o-animation: animation-rotate 2000ms linear infinite;
  animation: animation-rotate 2000ms linear infinite;
}

@-webkit-keyframes animation-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes animation-rotate {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-o-keyframes animation-rotate {
  100% {
    -o-transform: rotate(360deg);
  }
}

@keyframes animation-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
