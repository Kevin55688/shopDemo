<template>
  <div id="banner" class="carousel slide " data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#banner"  data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="4" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner bg-dark ">
      <div class="carousel-item active ">
        <img class="d-block w-100" src="@/components/picture/banner/0920_twitter.webp">
      </div>
      <div class="carousel-item">
        <img class=" d-block w-100" src="@/components/picture/banner/1005_twitter.webp">
      </div>
      <div class="carousel-item">
        <img class=" d-block w-100" src="@/components/picture/banner/amoas_twitterbanner_1027.webp">
      </div>
      <div class="carousel-item">
        <img class=" d-block w-100" src="@/components/picture/banner/marchby_holoENhlwin_banner___1026_1.webp">
      </div>
      <div class="carousel-item">
        <img class=" d-block w-100" src="@/components/picture/banner/Rikka3rdAnnivGoods_T.webp">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#banner"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#banner"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>


<script>
export default {
  name:'banner-top'
}
</script>


<style scoped>


.carousel{
  margin-top: 100px;
}

.carousel-indicators{
  background-color: rgba(63, 51, 129, 0.6);
  border-radius: 50px;
  z-index: 1;
}

.carousel-inner{
  height: auto;
} 

#banner img {
  object-fit:contain;
  /* filter: grayscale(50%); */
}

#banner .carousel-indicators > button {
  border-radius: 50%;
  height: 15px;
  width: 15px;
  border: 10px solid transparent;
}

</style>