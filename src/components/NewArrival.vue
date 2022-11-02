<template>
  <div class="new-arrival-container">
    <div class="info-title">
      <img src="@/components/picture/NewArrival__header--title.png">
    </div>
    <div class="container-fluid">
      <div class="row g-5">
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/1031_mel_birth2022_top_fix_400x.webp"></a>
          <h1>夜空メル 誕生日記念2022</h1>
          <p>$16USD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/amoas_banner_ASnui_1027_600x.webp"></a>
          <h1>"Among Us x Hololive production" 立體壓克力支架</h1>
          <p>$21USD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/amoas_banner_sticker_1027_600x.webp"></a>
          <h1>"Among Us x Hololive production"合作貼紙</h1>
          <p>$4USD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/amoas_banner_keyholder_1027_400x.webp"></a>
          <h1>"Among Us x Hololive production"鑰匙扣</h1>
          <p>$7USD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/amoas_banner_playtagK_1027_600x.webp"></a>
          <h1>"Among Us x Hololive production"標籤鑰匙扣</h1>
          <p>$ˊUSD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/HSHGFY_Banner_2022_EC_01_600x.webp"></a>
          <h1>HoloStars音樂劇CD</h1>
          <p>$6USD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/Rikka3rdAnnivGoods_B0_600x.webp"></a>
          <h1>律可活動三週年紀念</h1>
          <p>$4USD</p>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/new-arrival/aqua2nd_bd_ec_01_600x.webp"></a>
          <h1>Aqua Minato One-Man Live 2022</h1>
          <p>$42USD</p>
        </div>

        <div class="col-6 col-md-4 col-lg-3  offset-6 offset-md-8  offset-lg-9">
          <a href="#"><img class="w-100" src="@/components/picture/Information__footer--andMore.png" ></a>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:'new-arrival'
}
</script>

<style scoped>

h1{
  margin-top: 10px;
}

p{
color: rgb(232, 70, 161);

}
h1,p{
  font-size: 16px;
}
.info-title{
width: 100%;
margin:  50px 0px;
display: flex;
justify-content: center;
position: relative;
}

.info-title img{
max-width: 100%;
padding: 30px;
z-index: 1;
background-color: white;

}

.info-title::before{
  content: '';
  height: 15px;
  width: 100vw;
  top: 50%;
  left: 0;
  position: absolute;
  background: repeating-linear-gradient(135deg, #6ec4e8, #6ec4e8 3px, #ffffff 6px);
  
}


.container-fluid{
  padding: 0px 15% 100px ;
}



</style>