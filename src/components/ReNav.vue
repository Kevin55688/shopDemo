<template>
  <nav>
    <div class="nav-container">
      <div class="call-menu">
        <button @click="menuShow" class="call-menu-btn"></button>
      </div>
      <div class="logo">
        <a href="#"><img src="./picture/Hololive_Production_nav.png"></a>
      </div>
      <ul class="menu" :class="isMenuShow" v-menuClickOutside="menuHidden">
        <button @click="menuHidden">X</button>
        <li>
        <a class="nav-link " aria-current="page" href="#"><router-link to="/"><p>首頁</p></router-link> </a>
        </li>
        <li>
        <a class="nav-link " aria-current="page" href="#"><router-link to="/store"><p>最新商品</p></router-link> </a>
        </li>
        <li>
        <a class="nav-link" href="#"><router-link to="/stream"><p>直播資訊</p></router-link></a>
        </li>
      </ul>
      <div class="btn-container">
      <div class="search" :class="isSearchShow" v-searchClickOutside="searchHidden">
        <input type="search" placeholder="請輸入關鍵字">
        <button @click="searchHidden">X</button>
      </div>
      <div class="btn-item">
        <button class="btn-search" @click="searchShow"><font-awesome-icon icon="search" /></button>
      </div>
      <div class="btn-item">
        <router-link to="/login">
          <button class="btn"><font-awesome-icon icon="user" /></button>
        </router-link>
      </div>
      <div class="btn-item">
        <button class="btn"><font-awesome-icon icon="shopping-bag" /></button>
      </div>
      </div>
    </div>
  </nav>
</template>



<script>
const menuClickOutside = {
  // 初始化指令
  bind(el, binding,) {
      function documentHandler(e) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (e.target.className == 'call-menu-btn' || el.contains(e.target)) {
              return false;
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
              // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
              binding.value(e);
          }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueClickOutside__ = documentHandler;
      document.addEventListener('click', documentHandler);
  },
  update() {},
  unbind(el,) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
  },
};

const searchClickOutside = {
  // 初始化指令
  bind(el, binding,) {
      function documentHandler(e) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (e.target._prevClass == 'svg-inline--fa fa-search fa-w-16' || el.contains(e.target) || e.target._prevClass == 'btn-search') {
              return false;
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
              // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
              binding.value(e);
          }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueClickOutside__ = documentHandler;
      document.addEventListener('click', documentHandler);
  },
  update() {},
  unbind(el,) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
  },
};
export default {
name:'Re-nav',
data () {
  return {
    isMenuShow : 'menuHidden',
    isSearchShow : 'searchHidden',
    num : 0,
    menuLightBox : false,
    searchLightBox : false,
    isNavLightBox: false,
  }
},
directives: {menuClickOutside,searchClickOutside},
methods: {
  menuShow () {
      this.isMenuShow = 'menuShow'
      this.menuLightBox = true
      this.NavLightBoxHandler ()
    },    
    menuHidden () {
      this.isMenuShow = 'menuHidden'
      this.menuLightBox = false
      this.NavLightBoxHandler ()
      this.$emit('isNavLightBox', this.isNavLightBox)
    },  
    searchShow () {
      this.isSearchShow = 'searchShow'
      this.searchLightBox = true
      this.NavLightBoxHandler ()
    },    
    searchHidden () {
      this.isSearchShow = 'searchHidden'
      this.searchLightBox = false
      this.NavLightBoxHandler ()
      this.$emit('isNavLightBox', this.isNavLightBox)
    },
    NavLightBoxHandler () {
    if (this.menuLightBox || this.searchLightBox) {
      this.isNavLightBox = true
    } else {
      this.isNavLightBox = false
    }
  }
},
}
</script>


<style lang="scss" scoped>
.router-link-exact-active{
  color: rgb(113, 203, 228);
}

nav{
  background-color: rgb(251, 246, 246);
  height: 100px;
  position:fixed;
  width: 100%;
  z-index: 999;
  padding: 15px;

  >.nav-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
  >.call-menu{
    display: none;
    @media screen and (max-width: 992px) {
      display:flex;
      align-items: center;
      // border-radius: 10px;
      position: relative;
      // border: solid 1px gray;
      &:before{
        content:"";
        width: 30px;
        height: 1px;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 15px;
      }      
      &:after{
        content:"";
        width: 30px;
        height: 1px;
        background-color: black;
        position: absolute;
        top: 30%;
        left: 15px;
      }
    }
    >button{
      width: 60px;
      height: 50px;
      border: none;
      background-color:transparent;
      border-radius: 10px;
      border: solid 1px gray;
      &:after{
        content:"";
        width: 30px;
        height: 1px;
        background-color: black;
        position: absolute;
        top: 70%;
        left: 15px;
      }
              &:active{
          background-color: rgb(113, 203, 228);
        }
    } 
  }
    >.logo{
      width: 150px;
      // background-color: blue;
      overflow: hidden;
      object-fit: contain;
      align-items: center;
      display: flex;
      >a{
      object-fit: contain;
        width: 100%;
        >img{
          width: 100%;
          // height: 100%;
          // object-fit: contain;
          // vertical-align: middle;
          // object-position: center center;
        }
      }
    }
    >.menu{
      padding: 0;
      height: 100%;
      width: 50%;
      display: flex;
      list-style: none;
      justify-content: center;
      >button{
        display: none;
        @media screen and (max-width: 992px) {
          display: block;
          width: 20px;
          height: 20px;
          margin: 20px;
          border: none;
          font-size: 20px;
          background-color:transparent;
        }
      }
      >li{
        margin: 0 10px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 992px) {
          border-bottom: solid 1px gray;
          margin: 10px 20px;
          height: 40px;
        }
        a{
          text-decoration: none;
          &:active{
            background-color:rgb(215, 229, 233) ;
          }
          @media screen and (max-width: 992px) {
            text-align: start;
        }
        }
      }
      
    }

    >.menuShow{
      @media screen and (max-width: 992px) {
        position:fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 300px;
        background-color: white;
        z-index: 999;
        flex-direction: column;
        justify-content: start;
        transition: all 1s;
      }
    

    }    
    >.menuHidden{
      @media screen and (max-width: 992px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 300px;
        background-color: white;
        z-index: 999;
        flex-direction: column;
        justify-content: start;
        transform: translateX(-100%);
        transition: all 1s;
      }
    

    }

    >.btn-container{
      display: flex;
      >.search{
        display: flex;
        justify-content: center;
        >input{
          border: none;
          border-radius: 5px 0px 0px 5px ;
        @media screen and (max-width: 992px) {
          width: 80vw;
          border: solid 1px rgb(113, 203, 228);
          border-radius: 5px
        }
        }
        >button{
          display: none;
          @media screen and (max-width: 992px) {
            display: block;
            background-color:transparent;
            border: none;
            font-size: 20px;
            color: gray;
          }
        }
      }
      >.searchShow{
        @media screen and (max-width: 992px) {
          position: fixed;
          width: 100%;
          margin-top:70px;
          background-color: white;
          left: 0;
          padding: 20px 0;
          transition: all 1s;
          border-bottom:solid 1px gray;
      }
      }
      >.searchHidden{
        @media screen and (max-width: 992px) {
          display:none;
          transition: all 1s;
        }
      }
      >.btn-item{
        button{
          height: 100%;
        }
        &:nth-child(2) {
          >button{
            background-color:white;
            border-radius: 0px 5px 5px 0px ;
            border: none;
            margin: 0;
            @media screen and (max-width: 992px) {
              background-color:transparent;
            }

          }
        }
      }
    }
  }
}

</style>