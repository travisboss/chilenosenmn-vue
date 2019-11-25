<template>
  <section id="party">
    <div class="container">
      <span class="is-clearfix"></span>
      <div class="tile is-12 is-parent">
        <article class="tile is-child notification is-danger has-text-centered">
          <p class="title">Anuncios</p>
          <p class="subtitle">
            Cambio de domicilio electoral en Minnesota : ¿Cómo, dónde y hasta cuándo realizarlo?
            Para inscribir o cambiar su domicilio electoral, pueden hacerlo vía online con su clave
            única de registro civil. En el caso de no tener su clave, puede hacer el cambio de
            domicilio pidiendo una cita con nuestra  cónsul honoraria en Minnesota,
            <span class="has-text-weight-bold">Teresa P. Olson</span> a
            <a class="has-text-link" href="mailto:consulhonorariamn@gmail.com"
              >consulhonorariamn@gmail.com</a
            >.
            <span class="has-text-weight-bold"
              >Plazo para realizar este trámite es hasta el dia  27 de Noviembre. Gracias!</span
            >
          </p>
          <div class="content">
            <!-- Content -->
          </div>
        </article>
      </div>
      <div class="is-pt-2">
        <div class="column is-9" style="margin: 0 auto;">
          <div class="tile is-parent">
            <article class="tile is-child notification has-background-white-bis">
              <p class="title">Consulado General de Chile en Chicago cambio de oficina</p>
              <figure class="image is-2by4">
                <a :href="url" target="_blank">
                  <img :src="imgURL" />
                </a>
              </figure>
            </article>
          </div>
          <div class="is-parent is-pt-2 is-hidden">
            <div
              class="fb-post"
              data-href="https://www.facebook.com/chilenos.fernandez.9/posts/600496920724489"
              data-width=""
              data-show-text="true"
            >
              <blockquote
                cite="https://developers.facebook.com/chilenos.fernandez.9/posts/600496920724489"
                class="fb-xfbml-parse-ignore"
              >
                <p>
                  Queridos amigos, Queremos expresar nuestro más sincero pesar por la situación que
                  está pasando nuestro país....
                </p>
                Posted by
                <a href="https://www.facebook.com/chilenos.fernandez.9">Chilenos EnMinnesota</a>
                on&nbsp;<a
                  href="https://developers.facebook.com/chilenos.fernandez.9/posts/600496920724489"
                  >Thursday, November 14, 2019</a
                >
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Announcements',
  props: ['title', 'imgURL', 'url'],
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
