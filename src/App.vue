<template>
  <div id="app">
    <div class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item navbar-logo is-size-2-desktop is-size-4-tablet is-size-6-mobile"
            href="#app"
          >
            <img src="./assets/chilenosEnMN.png" class="image is-pr-1" />
            Chilenos En Minnesota
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarChile"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" id="navbarChile">
          <div class="navbar-end">
            <Nav title="Fiestas Patrias" url="#party"></Nav>
            <Nav title="Eventos Pasados" url="#portfolio"></Nav>
            <Nav title="Contacto" url="#contact"></Nav>
          </div>
        </div>
      </div>
    </div>
    <Header></Header>
    <Announcements
      title="Consulado General de Chile en Chicago cambio de oficina"
      imgURL="./images/2019cambioDeOficinia.jpg"
      url="./images/2019infoCambioDeOficina.pdf"
    ></Announcements>
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
          imgURL="./images/2016FiestasPatriasweb.jpg"
          url="https://www.flickr.com/photos/141871767@N05/collections/72157710431083346/"
        ></Events>
        <Events
          title="Picnics"
          imgURL="./images/2018Picnicsweb.jpg"
          url="https://www.flickr.com/photos/141871767@N05/collections/72157710431075261/"
        ></Events>
        <Events
          title="Otros Eventos"
          imgURL="./images/bingo2018web.jpg"
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
