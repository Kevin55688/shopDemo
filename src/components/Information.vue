<template>
  <div class="info-container">
    <div class="info-title">
      <img src="@/components/picture/Information__header--title.png">
    </div>
    <div class="list">
      <ul class="list-group">
        <li class="list-group-item ">
          <span class="time new">2022.10.24</span>
          <span class="new-type new rounded-pill">消息</span>
          <span class="new-text new"><a href="#">2022年10月25系統維護通知</a></span>
        </li>
        <li class="list-group-item ">
          <span class="time new">2022.10.24</span>
          <span class="new-type new rounded-pill">消息</span>
          <span class="new-text new"><a href="#">2022年10月25系統維護通知</a></span>
        </li>
        <li class="list-group-item ">
          <span class="time new">2022.10.24</span>
          <span class="new-type new rounded-pill">消息</span>
          <span class="new-text new"><a href="#">2022年10月25系統維護通知</a></span>
        </li>
      </ul>

      <!-- <div class="and-more">
        <a href="#"><img src="@/components/picture/Information__footer--andMore.png" ></a>
      </div> -->
      <div class="container-fluid">
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3  offset-6 offset-md-8  offset-lg-9">
          <a href="#"><img class="w-100" src="@/components/picture/Information__footer--andMore.png" ></a>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'information-place'
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
  width: 100vw;
  top: 50%;
  left: 0;
  position: absolute;
  background: repeating-linear-gradient(135deg, #6ec4e8, #6ec4e8 3px, #ffffff 6px);
  
}

.list{
  padding: 0px 15% 100px ;
}

.list-group{
  margin-bottom: 4.5rem;
}

.list-group-item{
  border: none;
  padding: 20px;
  text-align: initial;
} 
.list-group-item + .list-group-item{
  position: relative;
}

.list-group-item +.list-group-item::before{
  content:'';
  position: absolute;
  width: 100%;
  height: 1px;
  border-top: 1px orange dashed;
  top: 0;
  left: 0;
}

.new{
  margin-left: 25px;
}

.new-type{
  background-color: #6ec4e8;
  padding: 5px;
  font-weight: bold;
  color: white;
}


</style>