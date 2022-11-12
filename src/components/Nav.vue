<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#"><img src="./picture/Hololive_Production_nav.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" ></span>
      </button>
      <div class="collapse navbar-collapse bg-dark-lg "  id="navbarSupportedContent" >
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#"><router-link to="/"><p>首頁</p></router-link> </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/stream"><p>直播資訊</p></router-link></a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="請輸入關鍵字"><font-awesome-icon icon="search" /></button>
        </form>
        <router-link to="/login">
          <button class="btn btn-outline-success rounded-circle m-3"><font-awesome-icon icon="user" /></button>
        </router-link>
        <button class="btn btn-outline-success rounded-circle m-1"><font-awesome-icon icon="shopping-bag" /></button>    
      </div>
    </div>
    
    
    
  </nav>
</template>


<script>
export default {
name:'nav-top'
}

</script>


<style scoped>
.navbar{
  background-color: rgb(204, 202, 202);
}

.container-fluid{
  width: 100%;
  height: 100%;
}


img{
height: 80px;
}
a{
font-weight: bold;
text-decoration: none;
}

a p:hover{
background-color: rgba(187,222,214,1);
transition: .2s;
}
nav{
height: 100px;
z-index: 2;
}
.navbar-collapse{
background-color: rgba(242,244,246,1);
}


@media screen and (min-width: 992px) {
.navbar-collapse{
background-color: transparent;
}
}



</style>