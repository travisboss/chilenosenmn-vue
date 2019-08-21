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
        <img src="https://source.unsplash.com/H6KJ2D0LphU/1920x900" />
      </slide>
      <slide>
        <img src="https://source.unsplash.com/9mYqvUo5XxM/1920x900" />
      </slide>
      <slide>
        <img src="https://source.unsplash.com/uS2AiyPQVHM/1920x900" />
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
