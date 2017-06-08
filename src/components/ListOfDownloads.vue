<template lang='html'>
  <div>
    <h2>{{prefix}}</h2>
    <ul>
      <Href :object="object" v-for='object in s3Objects' :key="object.Etag"></Href>
    </ul>
    <b-table
      :tableData="object"
      v-for='object in s3Objects'
      :key="object.Etag"
    ></b-table>
  </div>
</template>

<script>
// const _ = require('lodash');
import Href from './Href';

export default {
  name: 'ListOfDownloads',
  props: ['prefix'],
  data() {
    return {
      s3Objects: [{

      }],
    };
  },
  components: {
    Href,
  },
  // computed() {
  //   const allObjects = _.map(this.s3Objects, (val, res) {
  //     return res.Key;
  //   });
  //   return allObjects;
  // },
  created() {
    // this.s3Objects = [{
    //   Key: 'alpha/mac/Fetchit_0.1.3_for_mac.zip',
    //   LastModified: '2017-06-08T02:30:35.000Z',
    //   ETag: '\'b95cc84a8832bb9f6782c6ba19f516d5-29\'',
    //   Size: 148629353,
    //   StorageClass: 'STANDARD',
    // },
    // {
    //   Key: 'alpha/mac/Fetchit_0.1.4_for_mac.zip',
    //   LastModified: '2017-06-08T02:40:53.000Z',
    //   ETag: '\'6b293ac1dc4bca740567be8a44ab39ea-29\'',
    //   Size: 148629503,
    //   StorageClass: 'STANDARD',
    // }];
    this.$http.get(`/${this.prefix}`).then((res) => {
      this.s3Objects = res.body.Contents;
    });
  },
};
</script>

<style lang='css'>
h2 {
  font-size:28px;
}
</style>
