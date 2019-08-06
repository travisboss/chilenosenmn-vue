<template>
  <div id="app">
    <div class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item navbar-logo is-size-2-desktop is-size-4-tablet is-size-6-mobile" href="#app"
            >Chilenos En Minnesota</a
          >

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
            <Nav title="Events" url="#party"></Nav>
            <Nav title="Past Events" url="#portfolio"></Nav>
            <Nav title="Contact" url="#contact"></Nav>
          </div>
        </div>
      </div>
    </div>
    <Header></Header>
    <Announcements></Announcements>
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="content has-text-centered">
          <h2 class="section-heading text-uppercase">Past Events</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="columns">
        <Events
          title="Picnic"
          year="2018"
          imgURL="./images/2018Picnicsweb.jpg"
          url="https://flic.kr/s/aHsmqKZnQK"
        ></Events>
        <Events
          title="Aquatennial Sister Cities"
          year="2017"
          imgURL="./images/2017-Aquatennial-Parade-Sister-Citiesweb.jpg"
          url="https://flic.kr/s/aHsmqL4HwR"
        ></Events>
        <Events
          title="Fiestas Patrias"
          year="2017"
          imgURL="./images/2017FiestasPatriasweb.jpg"
          url="https://flic.kr/s/aHsmgVqNN3"
        ></Events>
      </div>
      <div class="columns">
        <Events
          title="Fiesta de Año Nuevo"
          year="2017"
          imgURL="./images/2017FiestadeAnonuevoweb.jpg"
          url="https://flic.kr/s/aHskD19tAF"
        ></Events>
        <Events
          title="Fiestas Patrias"
          year="2016"
          imgURL="./images/2016FiestasPatriasweb.jpg"
          url="https://flic.kr/s/aHsmqfoZhE"
        ></Events>
        <Events
          title="Bingo"
          year="2015"
          imgURL="./images/bingo2018web.jpg"
          url="https://flic.kr/s/aHsmqfm2VG"
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
