<template>
  <div id="app">
    <h1>Fetchit Receiving Screen Downloads</h1>
    <ListOfDownloads prefix="mac"></ListOfDownloads>
    <ListOfDownloads prefix="linux"></ListOfDownloads>
    <ListOfDownloads prefix="windows"></ListOfDownloads>

  </div>

</template>

<script>
import ListOfDownloads from './components/ListOfDownloads';

export default {
  name: 'app',
  components: {
    ListOfDownloads,
  },
};
</script>

<style>
/*@import 'buefy/lib/buefy.css';*/
h1 {
  font-size:40px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
