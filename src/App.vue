<template>
  <div id="app">
    <Nav></Nav>
    <Header></Header>
    <section id="party">
      <div class="container">
        <div class="tile is-12 is-parent">
          <article class="message is-info">
            <div class="message-header">
              Avisos
            </div>
            <div class="message-body">
              <ol>
                <li>
                  Queremos recordarles que para inscribir o cambiar su domicilio electoral, pueden
                  hacerlo vía online con su clave única de registro civil. En el caso de no tener su
                  clave, puede hacer el cambio de domicilio pidiendo una cita con nuestra cónsul
                  honoraria en Minnesota,
                  <span class="has-text-weight-bold">Teresa P. Olson</span> a
                  <a class="has-text-link" href="mailto:consulhonorariamn@gmail.com"
                    >consulhonorariamn@gmail.com</a
                  >
                </li>
                <br />
                <li>
                  También, queremos informarles que se realizará un Conversatorio acerca de la
                  Constitución con la participación de profesionales en el tema. Éste estaría a
                  cargo de la Profesora Lisa Hilbink y de la candidata a doctora Valentina Salas.
                  Ambas del Departamento de Ciencias Políticas de la Universidad de Minnesota. El
                  día, hora y lugar se confirmará dentro de los próximos días. Por el momento la
                  idea es realizarlo a finales de enero 2020.
                </li>
              </ol>
            </div>
          </article>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-third">
            <Announcements
              title="Conclusiones del Cabildo Comunitario Chilenos En Minnesota"
              imgAnnounce="https://i.postimg.cc/W420TNKh/Cabildo-Comunitario-Chilenos-en-Minnesota.jpg"
              url="https://drive.google.com/file/d/0B4GjYxhszQjCOVhlYUl1aHVVQU5HYjJNLUpUZDAzRzFZTy1R/view"
            ></Announcements>
          </div>
          <div class="column is-third">
            <Announcements
              title="Instrucciones para donar desde el extranjero para la Cruz Roja Chilena"
              imgAnnounce="https://i.postimg.cc/ncXY5WJD/INSTRUCCIONS-TRANFER-BANCOESTADO-292222.jpg"
              url="https://drive.google.com/drive/folders/1bhC8r4SfHX8gS3NzxxTDvs0B5TPAdlfd"
            ></Announcements>
          </div>
          <div class="column is-third">
            <Announcements
              title="Peticion para la instalacion de una mesa de votacion en Minnesota"
              imgAnnounce="https://i.postimg.cc/HLH9n4JW/Peticion-para-la-instalacion-de-una-mesa-de-votacion-en-Minneso.jpg"
              url="http://chng.it/rBCsLTPfbF"
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
