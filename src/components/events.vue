<template>
  <div class="column is-4 portfolio-item">
    <a class="portfolio-link" :href="url" target="_blank">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-external-link fa-3x" aria-hidden="true" />
        </div>
      </div>
      <img v-lazyload class="image" :src="imgURL" alt="chilenosenminnesota" />
    </a>
    <div class="portfolio-caption">
      <h4 class="title">{{ title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Events",
  props: ["title", "imgURL", "url"]
};
</script>
