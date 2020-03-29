<template>
  <div id="app">
    <Nav></Nav>
    <Header></Header>
    <section id="party">
      <div class="container">
        <div class="tile is-12 is-parent">
          <article class="message is-info">
            <div class="message-header">
              Aviso
            </div>
            <div class="message-body">
              <p>Para nuestros amigos que disfrutan del fútbol Minnesotano, el club cuenta con entradas a precio rebajado ($30/ ticket +tax) para los siguientes partidos:</p>
              <ul>
                <li>Sat 5.27. 7pm</li>
                <li>Sat 7.18. 7pm</li>
                <li>Sun 8.9 2pm</li>
              </ul>
              <p>Los interesados por favor contactarse con Teresa Palacios Olson o envíenos un mensaje por interno.</p>
            </div>
          </article>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-third">
            <Announcements
              title="Consulado Honorario en Minnesota"
              imgAnnounce="https://i.postimg.cc/hj2qj06Q/servicosconsulares.jpg"
              url="https://serviciosconsulares.cl/tramites/consulados-en-el-exterior/estados-unidos/minneapolis-minnesota/consulado-honorario-en-minneapolis-minnesota"
            ></Announcements>
          </div>
          <div class="column is-third">
            <Announcements
              title="Voto Chileno en Exterior"
              imgAnnounce="https://i.postimg.cc/4NLb5hkv/votoCrop.jpg"
              url="https://www.votoenelexterior.cl/"
            ></Announcements>
          </div>
          <div class="column is-third">
            <Announcements
              title="Venta de Empanadas en Minnesota"
              imgAnnounce="https://i.postimg.cc/tCTFYCZs/empanada.jpg"
              url="https://www.facebook.com/pg/atacamacatering/photos/?ref=page_internal"
            ></Announcements>
          </div>
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
    </section>
    <hr />
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="content has-text-centered">
          <h2 class="section-heading text-uppercase">Eventos Pasados</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="columns">
        <Events
          title="Fiestas Patrias"
          imgURL="https://i.postimg.cc/nVkBPk7J/2016-Fiestas-Patriasweb.jpg"
          url="https://www.flickr.com/photos/141871767@N05/collections/72157710431083346/"
        ></Events>
        <Events
          title="Picnics"
          imgURL="https://i.postimg.cc/50vdtyBB/2018-Picnicsweb.jpg"
          url="https://www.flickr.com/photos/141871767@N05/collections/72157710431075261/"
        ></Events>
        <Events
          title="Otros Eventos"
          imgURL="https://i.postimg.cc/hvgwPrPn/bingo2018web.jpg"
          url="https://www.flickr.com/photos/141871767@N05/collections/72157710431092156/"
        ></Events>
      </div>
    </section>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>

<script>
import Announcements from './components/announcements.vue';
import Events from './components/events.vue';
import Footer from './components/footer.vue';
import Form from './components/form.vue';
import Header from './components/header.vue';
import Nav from './components/nav.vue';

export default {
  name: 'app',
  components: {
    Announcements,
    Events,
    Footer,
    Form,
    Header,
    Nav
  }
};
</script>
