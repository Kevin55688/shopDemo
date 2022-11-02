<template>
  <footer>
   <div class="footer-container">
     <div class="footer-inner">
       <div class="footer-item">
         <h2>
           <img class="footer-icon" src="@/components/picture/FooterIcon.webp">
           <span>訊息</span>
         </h2>
         <ul>
           <li><a href="#">相關法規</a></li>
           <li><a href="#">隱私政策</a></li>
           <li><a href="#">服務條款</a></li>
           <li><a href="#">問與答</a></li>
           <li><a href="#">國際航運</a></li>
           <li><a href="#">加洲居民隱私政策</a></li>
         </ul>
       </div>
       <div class="footer-item">
         <h2>
           <img class="footer-icon" src="@/components/picture/FooterIcon.webp">
           <span>相關網站</span>
         </h2>
         <ul>
           <li><a href="#">Cover Co., Ltd. 官方網站</a></li>
           <li><a href="#">Hololive 製作官方網站</a></li>
           <li><a href="#">Hololive 官方網站</a></li>
           <li><a href="#">Holostars 官方網站</a></li>
         </ul>
       </div>
       <div class="footer-item">
         <h2>
           <img class="footer-icon" src="@/components/picture/FooterIcon.webp">
           <span>社交網站</span>
         </h2>
         <ul>
           <li><a href="#"><img src="@/components/picture/twitter-icon.png">推特</a></li>
           <li><a href="#"><img src="@/components/picture/youtube-icon.png"> Youtube</a></li>
         </ul>
       </div>
     </div>
     <div class="footer-aside">
       <span>僅由薛琮潾練習使用</span>
     </div>
   </div>
  </footer>
 </template>
 
 <script>
 export default {
   name:'footer-place'
 }
 </script>
 
 
 <style scoped>
 
   footer{
     background-color: #313131;
     color: #999999;
     padding: 30px;
   }
 
 
 
   .footer-inner{
     display: flex;
     flex-direction: column;
     width: 100%;
   }
 
   .footer-item{
     text-align: start;
   }
 
   .footer-item span{
     font-size: 16px;
     color: white;
     font-weight: bold;
   }
 
   .footer-icon{
     width: 20px;
     height: 20px;
     object-fit: contain;
     margin-right: 10px;
     
   }
 
   li{
     list-style: none;
   }
 
   a{
     color: #999999;
     text-decoration: none;
     transition: 1s;
   }
 
   a:hover{
     color: white;
   }
 
 
   li img{
     width: 1em;
     height: 1em
   }
 
 
   @media screen and (min-width:768px) {
     .footer-inner{
     flex-direction: row;
     flex-wrap: wrap;
     }
     .footer-item{
       width: 50%;
       padding: 20px;
       margin: 0 0 25px;
 
     }
 } 
 
   @media screen and (min-width:992px){
   .footer-item{
     width: auto;
   }
 }
 
 </style>