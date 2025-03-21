<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><spinner /></div>
  </div>
</template>

<script>
import { computed } from "vue";
import PostList from "@/components/PostList.vue";
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";
import Spinner from "@/components/SpinnerCom.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });
    console.log(postsWithTag, posts.value);
    return { postsWithTag, error };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
