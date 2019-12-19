<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <a :href="url" target="_blank" rel="noopener">
            <img :src="imgAnnounce" alt="Image" />
          </a>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <a :href="url" target="_blank" rel="noopener">
            <p>
              {{ title }}
            </p>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Announcements',
  props: ['title', 'imgAnnounce', 'url'],
  data() {
    return { locale: 'es' };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>
<i18n>
{
  "es": {
    "message": "no hay eventos en este momento, chequee más tarde!"
  },
 "en": {
    "message": "no events at this time, please check back soon!"
  }
}
</i18n>
