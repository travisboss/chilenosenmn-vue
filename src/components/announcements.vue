<template>
  <section id="party">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="GET" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="4LX2UKBSAQ6AW" />
            <table>
              <tr>
                <td><input type="hidden" name="on0" value="Ticket(s)" />Ticket(s)</td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
                    <option value="Niños (5 a 15 años)">Niños (5 a 15 años) $3.00 USD</option>
                    <option value="Adultos (mayores de 15 años)"
                      >Adultos (mayores de 15 años) $7.00 USD</option
                    >
                  </select>
                </td>
              </tr>
            </table>

            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
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
