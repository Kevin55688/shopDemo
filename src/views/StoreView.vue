<template>
  <div class="store-container">
    <div class="banner">
      <img src="@/components/picture/store/ProductList__header--title--en.webp">
    </div>
    <div class="btnPlace">
      <button class="callFilter" @click="filterShow">Filter</button>
    </div>
    <div class="goods-container">
      <div class="filter" :class="isFilterShow"  v-clickoutside="filterHidden">
        <div class="type">
          <span>Filter</span>
          <button @click="filterHidden">X</button>
        </div>
        <div class="title">商品類型</div>
        <div class="filter-item">
          <input type="checkbox" id="newArrival" value="newArrival"  v-model="checkedStyle">
          <label for="newArrival">New Arrival</label>
        </div>
        <div class="filter-item">
          <input type="checkbox" id="digitalContents" value="digitalContents"  v-model="checkedStyle">
          <label for="digitalContents">Digital Contents</label>
        </div>

      </div>
      <div class="goods-list">
        <div class="goods-item">
          <a href="#"><img  src="@/components/picture/store/new-arrival/en_aranbd2022_goodsbanner_b0_1667996185_700x.webp"></a>
          <h1>Arurandeisu Birthday Celebration 2022</h1>
          <p>$4USD</p>
          <button><span>點此加入購物車</span></button>
        </div>
        <div class="goods-item">
          <a href="#"><img  src="@/components/picture/store/new-arrival/tokoyamitowa_1m_top_en_1028_1666946118_700x.webp"></a>
          <h1>Tokoyami Towa 1 Million Subscribers Celebration</h1>
          <p>$23USD</p>
          <button><span>點此加入購物車</span></button>
        </div>
        <div class="goods-item">
          <a href="#"><img  src="@/components/picture/store/new-arrival/1104_holosportsday2022_top_fix_en_1667388763_700x.webp"></a>
          <h1>"Happy☆Fever! hololive" Release Special</h1>
          <p>$7USD</p>
          <button><span>點此加入購物車</span></button>
        </div>
        <div class="goods-item">
          <a href="#"><img  src="@/components/picture/store/new-arrival/top_EXPO2022_resale_5318a75b-a4d1-4f6f-a8ae-7805e11acda4_700x.webp"></a>
          <h1>Vestia Zeta Birthday Celebration 2022</h1>
          <p>$5USD</p>
          <button><span>點此加入購物車</span></button>
        </div>
        <div class="goods-item">
          <a href="#"><img  src="@/components/picture/store/new-arrival/vestiazeta_2022_top_en_1101_1667827110_700x.webp"></a>
          <h1>[Resale] "hololive SUPER EXPO 2022" Event Merch</h1>
          <p>$12USD</p>
          <button><span>點此加入購物車</span></button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
const clickoutside = {
  // 初始化指令
  bind(el, binding,) {
      function documentHandler(e) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (e.target.className == 'callFilter' || el.contains(e.target)) {
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
  name: 'StoreView',
  data () {
    return {
      checkedStyle : [],
      isFilterShow : 'filterHidden',
      isLightBox: false,
    }
  },
  directives: {clickoutside},
  methods: {
    filterShow () {
      this.isFilterShow = 'filterShow'
      this.isLightBox = true
      this.$emit('isLightBox', this.isLightBox)
    },    
    filterHidden () {
      this.isFilterShow = 'filterHidden'
      this.isLightBox = false
      this.$emit('isLightBox', this.isLightBox)
    },
    
  }
}
</script>


<style lang="scss" scoped>


.store-container{
  margin-top: 150px;
  >.banner{
    position: relative;
    >img{
      background-color: white;
      max-width: 100%;
      padding: 30px;
      object-fit: cover;
    }
    &:before{
      content: '';
      height: 15px;
      width: 100%;
      top: 50%;
      left: 0;
      position: absolute;
      background: repeating-linear-gradient(135deg, #6ec4e8, #6ec4e8 3px, #ffffff 6px);
      z-index: -1;
    }
  }
  >.btnPlace{
    display: flex;
    justify-content: end;
    border-top: solid 1px rgb(174, 171, 171);
    border-bottom: solid 1px rgb(174, 171, 171);
    
    >.callFilter{
      display: none;
      width: 20%;
      @media screen and (max-width: 992px){
      width: 30%;
      display:block;
      padding: 20px;
      background-color:transparent;
      border: solid 1px rgb(174, 171, 171);
      border-right: none;
      &:hover{
        background-color: rgb(113, 203, 228);
      }
      }
      @media screen and (max-width : 768px) {
        width: 50%;
      }
  }
  }

  >.goods-container{
    width: 100%;
    display: flex;
    >.filter{
      width: 20%;
      display: flex;
      flex-direction: column;
      padding: 0 3%;
      >.type{
        display:none;
        @media screen and (max-width: 992px) {
          position: relative;
          display:flex;
          font-size: 24px;
          justify-content: center;
          padding: 10px;
          border-bottom: solid 1px rgb(174, 171, 171);
          margin-bottom: 20%;
          
        }
        >button{
          position: absolute;
          right: 0;
          background-color:transparent;
          border: none;
          &:hover{
          background-color: rgb(113, 203, 228);
          }
          
        }
      }

      >.title{
        border-bottom: 1px solid black;
        padding-bottom: 15px;
        text-align: left;
        margin-top: 10px;
      }
      >.filter-item{
        display: flex;
        justify-content: start;
        width: 100%;
        margin: 15px auto;
        >label{
          margin-left: 10px;
        }
      }
    }
    >.filterShow{
      @media screen and (max-width: 992px){
        position: absolute;
        top: 0;
        right: 0;
        background-color: white;
        height: 100%;
        min-width: 300px;
        z-index: 999;
        transition: all 1s;
      }
    }
    >.filterHidden{
      @media screen and (max-width: 992px){
        position: absolute;
        top: 0;
        right: 0;
        background-color: white;
        height: 100%;
        min-width: 300px;
        z-index: 999;
        transform: translateX(100%);
        transition: all 1s;
      }
    }
    >.goods-list{
      display: flex;
      width: 80%;
      flex-wrap: wrap;
      @media screen and (max-width: 992px){
        width: 100%;
      }
      >.goods-item{
        width: calc(25% - 30px);
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media screen and (max-width: 992px){
          width: calc((100%/3) - 30px);
      }        
        @media screen and (max-width: 768px){
          width: calc((100%/2) - 30px);
        }
        >a{
          >img{
            width: 100%;
            object-fit: cover;
          }
        }
        >h1{
          font-size: 16px;
          text-align: start;
        }
        >p{
          color: rgb(232, 70, 161);
        }
        >button{
          background-color: rgb(113, 203, 228);
          width: 100%;
          border: none;
          border-radius: 20px;
          transition: .3s;
          &:hover{
            box-shadow: 0 5px 0 rgb(32, 132, 159);
            transform: rotateX(15deg);
          }
          &:active{
            background-color: rgb(32, 132, 159);
            box-shadow: 0 4px 0 rgb(10, 29, 35);
            transform: translateY(4px);
          }
          span{
            display: inline-block;
          }
          
        }
      }
    }
  }
}



</style>


