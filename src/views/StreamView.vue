<template>
  <div>
    <div class="stream-container">
                <div class="streaming-inner">
                    <div class="streaming-item" v-for="(streamer,index) in streamInfo" :key="streamer.channelName">
                        <div class="streaming-pic" >
                            <div class="topic-id" v-show="streamer.topicId">{{streamer.topicId}}</div>
                            <a :href="liveRoomList[index]"><img :src="bgiList[index]" ></a>
                            <div class="duration-time" v-show="durationTime[streamer.channelName]">{{durationTime[streamer.channelName]}}</div>
                        </div>
                        <div class="info">
                            <div class="channel-photo">
                                <img :src="streamer.channelPhoto">
                            </div>  
                            <div class="stream-title">
                                <p>{{streamer.title}}</p>
                                <a href="#" class="channel-name"><p>{{streamer.channelName}}</p></a>
                                <span v-show="streamer.status"  class="live-status">實況中．<span class="live-viewers">{{streamer.liveViewers}}人正在觀看</span></span>
                                <span v-show="!streamer.status" class="isComing">將於{{comingSoon[streamer.channelName]}}分鐘內 開始實況</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import axios from 'axios';

console.log(Date.UTC(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), new Date().getDate(), new Date().getHours() , new Date().getMinutes(), new Date().getSeconds()))




export default {
  name: 'StreamPlace',
  components: {
  },
  data () {
    return {
      Streaming: [],
      nowTimeUTC : Date.UTC(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), new Date().getHours() , new Date().getMinutes(), new Date().getSeconds()),
      timer : '',
      updatedStreaming: '',
    }
  },
  methods:{
    updatedNowTimeUTC : function  () {
      this.nowTimeUTC+=1000
    },
    getAPI : function () {
      this.updatedStreaming = axios.get('https://holodex.net/api/v2/live/')
                                    .then((res) => {
                                      this.Streaming = res.data.filter((item) => {
                                      return item.channel.org == 'Hololive'
                                      })
                                    })
                                    .catch((err) => {
                                      console.log(err)
                                    })
    }
  },
  computed: {
  // 取得預覽圖
      bgiList: function () {
          let bgi = []
          this.streamInfo.map(function (item) {
              bgi.push("https://img.youtube.com/vi/" + item.viedoId + "/maxresdefault.jpg")
          })
          return bgi
      },
  // 取得直播影片id
      streamInfo: function () {
        let arr = []
        this.Streaming.map(function (item) {
            arr.push({channelName: item.channel.name, 
                      viedoId: item.id, 
                      channelId: item.channel.id, 
                      channelPhoto: item.channel.photo, 
                      status: item.status === "live"? true : false,
                      title: item.title, 
                      topicId: item.topic_id,
                      liveViewers : item.live_viewers,
                      startActual : item.start_actual,
                      startScheduled: item.start_scheduled,
                      durationTime : 'durationTime'})
        })
        return arr
      },
      //直播連結
      liveRoomList : function (){
        let liveRoom = []
        this.streamInfo.map(function(item) {
          liveRoom.push("https://www.youtube.com/watch?v=" + item.viedoId)
        })
        return liveRoom
      },
      //直播持續時間
      durationTime : function () {
        let durationTimeMillisecList = []
        let durationTimeList = {}
        let startActualList = []

        this.streamInfo.map((item) => {
          if(item.startActual) {
            startActualList.push({channelName : item.channelName, startActual: item.startActual})
          }
        })
        startActualList.map((item) => {
          let startActualTime = new Date (item.startActual) 
          let startActualTimeUTC = Date.UTC(startActualTime.getFullYear(), startActualTime.getMonth(),startActualTime.getDate() ,startActualTime.getHours(),startActualTime.getMinutes(),startActualTime.getSeconds())
          durationTimeMillisecList.push({channelName : item.channelName, durationTimeMillisec : this.nowTimeUTC-startActualTimeUTC})
        })
        durationTimeMillisecList.map((item) => {
          let hour = parseInt(item.durationTimeMillisec % (1000 * 60 *60 *24) / (1000 * 60 * 60 ))
          let minutes = parseInt(item.durationTimeMillisec % (1000 * 60 * 60) / (1000 * 60))
          let seconds = parseInt(item.durationTimeMillisec % (1000 * 60) / 1000)
          durationTimeList[item.channelName] = hour + ":" + minutes +  ":" + seconds
        })

        return durationTimeList
      },
      comingSoon : function () {
        let comingTimeList = {}
        this.streamInfo.map ((item) => {
          let startScheduledTimeUTC = Date.UTC(new Date(item.startScheduled).getFullYear(), new Date(item.startScheduled).getMonth(),new Date(item.startScheduled).getDate() ,new Date(item.startScheduled).getHours(),new Date(item.startScheduled).getMinutes(),new Date(item.startScheduled).getSeconds())
          let comingTimeUTC = startScheduledTimeUTC - this.nowTimeUTC
          let minutes = parseInt(comingTimeUTC % (1000 * 60 * 60) / (1000 * 60))
          comingTimeList[item.channelName] = minutes
        })
        return comingTimeList
      }
      },

  mounted() {
    axios.get('https://holodex.net/api/v2/live/')
          .then((res) => {
              this.Streaming = res.data.filter((item) => {
                  return item.channel.org == 'Hololive'
              })

          })
          .catch((err) => {
            console.log(err)
          })
    this.timer = setInterval(this.updatedNowTimeUTC, 1000)      
    this.updatedStreaming = setInterval(this.getAPI, 60000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}

</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


body{
  width: 100%;
}
p{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.streaming-inner{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.streaming-item{
  width: 90%;
  margin: 5%;
}
.streaming-pic{
  max-width: 100%;
  position: relative;
}
.streaming-pic .topic-id{
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgb(145, 137, 137);
  border-radius: 5px;
  text-align: center;
  padding: 5px;
}
.streaming-pic .duration-time{
  position: absolute;
  bottom: 10px;
  right: 5px;
  background-color: rgba(235, 49, 49, .7);
  border-radius: 5px;
  text-align: center;
  padding: 5px;
}
.streaming-pic img{
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center center;
}

.info{
  width: 100%;
  height: 25%;
  display: flex;
  margin: 10px 0;
}
.channel-photo{
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.channel-photo img{
  min-width: 100%;
  display:block;
  object-position: center center;
  border-radius: 50%;
  object-fit: cover;
}

.stream-title{
  width: 80%;
  height: 100%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
}


.stream-title p,
.stream-title a,
.live-status{
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.live-status{
  color: red;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.live-status .live-viewers,
.isComing{
  color: gray;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
}
@media screen and (min-width : 768px){
  .streaming-item{
    width: 45%;
    margin: 2.5%;
  }
}
        /* @media screen and (min-width : 992px) {
            .streaming-item {
                width: 30%;
                margin: calc(10%/6);
            }
        } */

@media screen  and (min-width:992px) {
  .streaming-item{
    width: 30%;
    margin: calc(10%/6);
  }
}

</style>