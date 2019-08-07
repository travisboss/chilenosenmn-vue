<template>
  <section id="party">
    <div class="container">
      <div class="columns is-centered">
        <div
          class="fb-post"
          data-href="https://www.facebook.com/chilenos.fernandez.9/posts/529036614537187"
          data-width="750"
          data-show-text="true"
        >
          <blockquote
            cite="https://developers.facebook.com/chilenos.fernandez.9/posts/529036614537187"
            class="fb-xfbml-parse-ignore"
          >
            <p>Importante información</p>
            Posted by
            <a href="https://www.facebook.com/chilenos.fernandez.9">Chilenos EnMinnesota</a>
            on&nbsp;<a
              href="https://developers.facebook.com/chilenos.fernandez.9/posts/529036614537187"
              >Tuesday, August 6, 2019</a
            >
          </blockquote>
        </div>
        <!--<h3 class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered is-capitalized">{{ $t('message') }}</h3>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Announcements',
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
