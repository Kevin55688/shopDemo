<template>
  <div class="new-arrival-container">
    <div class="info-title">
      <img src="@/components/picture/DigitalContents__header--title.webp">
    </div>
    <div class="container-fluid">
      <div class="row g-5">
        <div class="col-6 col-lg-3">
          <a href="#"> <img  class="w-100" src="@/components/picture/digital-contents/Rikka3rdAnnivGoods_B0_600x.webp"></a>
          <h1>律可活動三週年紀念</h1>
          <p>$4USD</p>
        </div>
        <div class="col-6 col-lg-3">
          <a href="#"><img  class="w-100" src="@/components/picture/digital-contents/nene_2nd_top_221019_600x.webp"></a>
          <h1>桃玲活動二週年紀念</h1>
          <p>$7USD</p>
        </div>
        <div class="col-6 col-lg-3">
          <a href="#"></a>
          <img  class="w-100" src="@/components/picture/digital-contents/MagniBD2022_top_600x.webp">
          <h1>Magni生日紀念2022</h1> 
          <p>$4USD</p>

        </div>
        <div class="col-6 col-lg-3">
          <a href="#"></a>
          <img  class="w-100" src="@/components/picture/digital-contents/KureijiOllie_2022_top_1004_600x.webp">
          <h1>Ollie生日2022</h1>
          <p>$5USD</p>
        </div>
        </div>

        <div class="col-6 col-md-4 col-lg-3  offset-6 offset-md-8  offset-lg-9">
          <a href="#"><img class="w-100" src="@/components/picture/andMore-digitalContents.png" ></a>
        </div>
        
      
    </div>
  </div>
</template>


<script>
export default {
  name:'digital-contents'
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