<template>
  <section id="party">
    <div class="container">
      <span class="clearfix"></span>
      <div class="columns is-centered" style="padding-top: 2em;">
        <figure class="image">
          <img style="width: 41em;" v-lazyload src="../assets/flyer Fiestas Patrias.jpg" />
        </figure>
        <!--<h3 class="is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered is-capitalized">{{ $t('message') }}</h3>-->
      </div>
      &nbsp;
      <span class="is-clearfix"></span>
      <div class="columns is-centered">
        <a
          href="./docs/convocatoriaPuestosDeVentasDeComida.pdf"
          class="button is-danger is-medium m-sm"
          target="_blank"
          style="margin: 1em 1em;"
          >Convocatoria Comida</a
        >
        <a
          href="./docs/fiestasPatrias2019.pdf"
          class="button is-info is-medium m-sm"
          target="_blank"
          style="margin: 1em 1em;"
          >Fiestas Patrias</a
        >
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
