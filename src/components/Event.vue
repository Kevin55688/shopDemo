<template>
  <div class="new-arrival-container">
    <div class="info-title">
      <img src="@/components/picture/Event__header-title.png">
    </div>
    <div class="container-fluid">
      <div class="row g-5">
        <div class="col-12 col-md-6 col-lg-4">
          <a href="#"><img  class="w-100" src="@/components/picture/event/sora-event.webp"></a>
          <h1>將舉辦"時乃空"5週年現場直播！</h1>
          <p>五週年直播“空與時空銀河”將於2022年11月19日星期六在葛飾山莫扎特音樂廳（線下）和SPWN（線上）舉行。兩場表演，一場在白天，一場在晚上，有現場樂隊編隊和部分不同的演出清單......</p>
          <a href="#" class="read-more">閱讀更多</a>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <a href="#"><img  class="w-100" src="@/components/picture/event/image_37_600x.webp"></a>
          <h1>將舉辦男性VTuber組合"Holostars"第2次整體直播！！</h1>
          <p>Cover Co., Ltd.，在本公司運營的男性VTuber組合“Holostars”中，屬於“Holostars”的藝人（花崎宮/Izuru the player/Arlandis/Ritsuka/Astel Reda/Tenma Kishido/Rovel in the night / Shien Kageyama / 現場活動“HOLOSTAR...</p>
          <a href="#" class="read-more">閱讀更多</a>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <a href="#"><img  class="w-100" src="@/components/picture/event/image_21_600x.webp"></a>
          <h1>「貓又岡由」第 1 次 Live。武士路支援的「Poison Nya ～ Syndrome」犬神科朗將作為嘉賓登場！</h1>
          <p>關於本公司運營的女性 VTuber 組合“Holo Live”的“貓又Okayu”，Cover Co., Ltd. 將作為現場活動“Nekomata Okayu 1st Live”的嘉賓表演。我們很高興地通知您，Korone 已經已決定。2022...</p>
          <a href="#" class="read-more">閱讀更多</a>
        </div>

        <div class="col-6 col-md-4 col-lg-3  offset-6 offset-md-8  offset-lg-9">
          <a href="#"><img class="w-100" src="@/components/picture/andMore-event.png" ></a>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:'event-place'
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

a{
  transition: .2s;
}

a:hover{
  opacity: .7;
}

h1{
  margin-top: 10px;
  color: #24C1FF;
  position: relative;
  margin-bottom: 20px;
  /* background-color: rgb(143, 133, 133); */
}
h1::before{
  content: "";
  position:absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg,orange 50%, #ffffff 50%);
  bottom: -10px;
  background-size: 15px 100%;
}
h1,p{
  font-size: 16px;
  text-align: start;
}

.read-more{
  color: black;
  text-decoration:none;
  position: relative;
}

.read-more::before{
  content: '';
  position: absolute;
  left: 0%;
  right: 0%;
  height: 1px;
  bottom: -3px;
  transition: .5s;
  background-color: black;

}

.read-more:hover::before{
  right: 100%;
}

</style>