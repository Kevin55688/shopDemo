<template>
  <div class="new-arrival-container">
    <div class="info-title">
      <img src="@/components/picture/group/Group__header-title_1.png">
    </div>
    <div class="container-fluid">
      <div class="row g-5">
        <div class="col-6 col-lg-3">
          <div class="pic">
            <img  class="w-100" src="@/components/picture/group/logo__hololive_73c1e999-1635-4c7a-b317-f6fecc324b78.webp" >
          </div>
          <div class="text">
            <a href="#">查看所有商品</a>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="pic">
            <img  class="w-100" src="@/components/picture/group/logo__hololive-id_34058f3c-d80a-4946-adee-694c960cd9d2.webp" >
          </div>
          <div class="text">
            <a href="#">查看所有商品</a>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="pic">
            <img  class="w-100" src="@/components/picture/group/logo__hololive-en_4035e85f-ade2-4ee7-a881-e88013d091f5.webp" >
          </div>
          <div class="text">
            <a href="#">查看所有商品</a>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="pic">
            <img  class="w-100" src="@/components/picture/group/logo__holostars_14b3fb46-45ec-4026-9add-9be84b8b0a98.webp" >
          </div>
          <div class="text">
            <a href="#">查看所有商品</a>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="pic">
            <img  class="w-100" src="@/components/picture/group/EN.webp" >
          </div>
          <div class="text">
            <a href="#">查看所有商品</a>
          </div>
        </div>

        <div class="col-12">
          <div class="banner">
            <a href="#"><img class="w-100" src="@/components/picture/group/marchby_holoENhlwin_banner___1021.webp" ></a>
          </div>
        </div>        
        <div class="col-12">
          <div class="banner">
            <a href="#"><img class="w-100" src="@/components/picture/group/march_by_banner__fix_688171f0-c817-439c-bb47-61df771823d8.webp" alt=""></a>
          </div>
        </div>
        <div class="col-12"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:'event-merch',
  props : [],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
  width: 100%;
  top: 50%;
  left: 0;
  position: absolute;
  background: repeating-linear-gradient(135deg, #6ec4e8, #6ec4e8 3px, #ffffff 6px);
  
}
.container-fluid{
  padding: 0px 15% 100px ;
}

.pic {
  border:3px solid #6ec4e8;
  border-radius: 30px;
  overflow: hidden;
  transition: 1s;
}
.pic img{
  width: 100%;
  max-height: 120px;
  object-fit: cover;
}

.text a {
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}
  .text a:hover
,.pic:hover{
  opacity: 0.5;
}

</style>