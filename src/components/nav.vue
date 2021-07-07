<template>
  <div
    class="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a
          class="navbar-item navbar-logo is-size-2-desktop is-size-4-tablet is-size-6-mobile has-text-weight-bold"
          href="#top"
        >
          <img
            src="https://i.postimg.cc/vTWZD3G8/header-navbar-logo.png"
            class="image is-pr-1"
          />
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
          <a
            class="navbar-item has-text-danger is-size-4 has-text-weight-bold"
            href="#portfolio"
            >Eventos Pasados</a
          >
          <a
            class="navbar-item has-text-danger is-size-4 has-text-weight-bold"
            href="#contact"
            >Contacto</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>
