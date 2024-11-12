<template>
  <div>创建博客</div>

  <div>
    <span>标题：</span>
  </div>
  <div id="editorContainer"
       class="editor-container">
    <v-md-editor v-if="editorHeight"
                 v-model="content"
                 :disabled-menus="[]"
                 :height="`${editorHeight}px`"
                 @upload-image="handleUploadImage"/>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
  const editorContainer = document.getElementById('editorContainer');
  editorHeight.value = editorContainer.clientHeight;
});

const editorHeight = ref(0);

const content = ref('hahahha');

const handleUploadImage = (event, insertImage, files) => {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files);

  // 此处只做示例
  insertImage({
    url:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
    desc: '七龙珠',
    // width: 'auto',
    // height: 'auto',
  });
};
</script>

<style scoped>
.editor-container {
  height: calc(100% - 100px);
  margin: 2rem 8rem;
  background: wheat;
}
</style>
