<template>
  <section id="party">
    <div class="container">
      <div class="columns is-centered">
        <div class="is-full"></div>
        <h3 class="is-size-3 has-text-centered is-capitalized">{{ $t('message') }}</h3>
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
