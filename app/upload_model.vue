<template>
  <div class="text-xs-center">
  <Navigator />
    <vue-dropzone :options="dropOptions" :useCustomSlot=true ref="ImageVueDropzone">
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title">Drag and drop to upload model!</h3>
        <div class="subtitle">...or click to select a file from your computer</div>
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
import vueDropzone from 'vue2-dropzone';
import Navigator from "./navigator.vue";

export default {
  name: "projector",


  components: {
    vueDropzone,
    Navigator,
  },


  data() {
    return {
      dropOptions: {
        url: '/upload_model',
        thumbnailWidth: 200, // px
        thumbnailHeight: 200,
        chunking: false,
        addRemoveLinks: true,
        maxFilesize: 500,
        timeout: 60000*5,
      },
    };
  },

  computed: {},

  created() {
    window.$main = this;
    this.originTitle = document.title;
  },
};
</script>

<style src="./common.css"></style>

<style scoped>
* {
  box-sizing: border-box;
}

.dropzone {
  min-height: 25rem;
}

.vue-dropzone {
  border-radius: 0.75rem;
}

.vue-dropzone > .dz-preview {
  margin: 1rem .25rem;
}

.vue-dropzone > .dz-preview .dz-image {
  border-radius: 0.75rem;

}

.dropzone .dz-preview .dz-details {
  border-radius: 0.75rem;

}

.dropzone .dz-preview {
  margin: 0.5rem;
}

.dropzone-custom-content {
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>
