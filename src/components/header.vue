<template>
  <header class="masthead" style="padding-bottom: 2em;">
    <carousel
      :autoplay="true"
      :per-page="1"
      :mouse-drag="false"
      :loop="true"
      :autoplayHoverPause="false"
      :mouseDrag="false"
      :paginationEnabled="false"
      :speed="2000"
      :autoplayTimeout="4500"
    >
      <slide>
        <img v-lazyload src="https://source.unsplash.com/H6KJ2D0LphU/1920x900" />
      </slide>
      <slide>
        <img v-lazyload src="https://source.unsplash.com/9CPAjGVB378/1920x900" />
      </slide>
      <slide>
        <img v-lazyload src="https://source.unsplash.com/9Sy-exlg7O4/1920x900" />
      </slide>
    </carousel>
  </header>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Header',
  components: {
    Carousel,
    Slide
  }
};
</script>
