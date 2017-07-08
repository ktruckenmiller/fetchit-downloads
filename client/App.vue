<template>
  <div class="app">
    <h1>Fetchit Downloads</h1>
    <div class="prefix_selector">
      <div class="header_wrap">
        <div class="headers block">
          <h3 :class="{button: true, 'is-active': prefixSelected === 'alpha',  'is-primary': prefixSelected === 'alpha'}" @click='selectPrefix("alpha")'>alpha</h3>
          <h3 :class="{button: true, 'is-active': prefixSelected === 'stage',  'is-primary': prefixSelected === 'stage'}" @click='selectPrefix("stage")'>stage</h3>
        </div>
      </div>

      <div class="file_wrap">
        <ReleaseLister v-if="prefixSelected === 'alpha'" prefix="alpha" :key="prefixSelected"/></ReleaseLister>
        <ReleaseLister v-if="prefixSelected === 'stage'" prefix="stage" :key="prefixSelected" /></ReleaseLister>
      </div>
    </div>

    <!-- <b-icon
      icon="desktop_windows"
      size="is-large"

    ></b-icon> -->

  </div>
</template>

<script>

import ReleaseLister from './ReleaseLister'
export default {
  data: function() {
    return {
      prefixSelected: ""
    }
  },
  methods: {
    selectPrefix (val) {
      this.prefixSelected = val;
    }
  },
  components: {ReleaseLister}
}
</script>

<style lang="sass">
@import 'scss/style.scss';
body {
  font-family: Open Sans, sans-serif;
}
.app {
  h1 {
    position:relative;
    font-weight: 100;
    font-size: 46px;
    opacity:1;
    text-align:center;
    text-transform: lowercase;
    letter-spacing:5px;
    margin: 0;
    z-index: 999;
    color: white;
    // background: #00796B;
    text-shadow: -1px -1px 1px rgba(100,100,100,.6);
    // box-shadow: inset -1px -1px 1px rgba(0,0,0,1);
  }
}
.prefix_selector {
  display: flex;
  // align-items: center;
  // justify-content: space-around;
  flex-direction: column;
  // position: absolute;
  top:0;left:0;right:0;bottom:0;
  .header_wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .headers {
      flex: 1;
      // padding-top:10px;

      text-align: center;
      transition: background-color .3s ease-in-out;
      h3 {
        font-size:26px;
        letter-spacing: 3px;
        font-weight:100;
        margin: 10px 30px;
      }
      &:first-child {

      }
    }
  }
  .file_wrap {
    background: transparent;
  }

}

</style>
