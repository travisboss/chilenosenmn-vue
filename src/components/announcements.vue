<template>
  <section id="party">
    <div class="container">
      <span class="clearfix"></span>
      <div class="columns is-centered" style="padding-top: 2em;">
        <div
          class="fb-post"
          data-href="https://www.facebook.com/chilenos.fernandez.9/posts/583661682408013:0"
          data-width=""
          data-show-text="true"
        >
          <blockquote
            cite="https://developers.facebook.com/chilenos.fernandez.9/posts/583661682408013:0"
            class="fb-xfbml-parse-ignore"
          >
            <p>#estamosunidos</p>
            Posted by
            <a href="https://www.facebook.com/chilenos.fernandez.9">Chilenos EnMinnesota</a>
            on&nbsp;<a
              href="https://developers.facebook.com/chilenos.fernandez.9/posts/583661682408013:0"
              >Thursday, October 24, 2019</a
            >
          </blockquote>
        </div>
        <!--<h3 class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered is-capitalized">{{ $t('message') }}</h3>-->
      </div>
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
