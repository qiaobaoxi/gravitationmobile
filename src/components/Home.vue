<template>
  <section class="container">
    <header>
      <img src="../assets/logo.png" alt="" sizes="" srcset="" class="logo">
      <div class="right">
        <a class="language" v-on:click="languageShow=!languageShow">
          <em>{{language}}</em>
          <img src="../assets/downArrow.png" v-show="arrow" alt="" srcset="">
          <img src="../assets/rightArrow.png" v-show="!arrow" alt="" srcset="">
        </a>
        <img src="../assets/menu.png" alt="" srcset="" class="menu" v-on:click="munuShow=!munuShow">
        <ul v-show="languageShow">
          <li @click="switchLanguage(index)" v-for="(item,index) in languangeArr" v-bind:key="item.lan">
            <img :src="item.img" alt=""><span>{{item.lan}}</span>
          </li>
        </ul>
      </div>
    </header>
    <section class="introduction">
       <p>
         {{introduction}} <br>
       </p>
       <img src="../assets/line.png" alt="" srcset="" class="line">
    </section>
    <section class="notice">
        <img :src="notice" alt="" srcset="" :style="`width:${noticeWidth}px`">
        <ul>
          <!-- <li>
            <h5>一切皆有可能</h5>
            <p>
              早晨起来，拥抱太阳，让身体充满，灿烂的阳光,满满的正能量,嘴角向下，会迷失方向，嘴角向
            </p>
          </li>
          <li>
            <h5>一切皆有可能</h5>
            <p>
              早晨起来，拥抱太阳，让身体充满，灿烂的阳光,满满的正能量,嘴角向下，会迷失方向，嘴角向
            </p>
          </li>
          <li>
            <h5>一切皆有可能</h5>
            <p>
              早晨起来，拥抱太阳，让身体充满，灿烂的阳光,满满的正能量,嘴角向下，会迷失方向，嘴角向
            </p>
          </li>
          <li>
            <h5>一切皆有可能</h5>
            <p>
              早晨起来，拥抱太阳，让身体充满，灿烂的阳光,满满的正能量,嘴角向下，会迷失方向，嘴角向
            </p>
          </li> -->
        </ul>
        <!-- <div class="btn">
           <a>查看更多</a><img src="../assets/rightArrow.png" alt="" srcset="">
        </div> -->
    </section>
    <section class="network">
       <img class="title" :src="networkImg" alt="" srcset="" :style="`width:${networkWidth}px`">
       <ul>
         <li>
           <img src="../assets/icon1.png" alt="" srcset="">
         </li>
         <li>
           <img src="../assets/icon2.png" alt="" srcset="">
         </li>
         <li>
           <img src="../assets/icon3.png" alt="" srcset="">
         </li>
         <li>
           <a href="https://0.plus/GravitionUSGD"><img src="../assets/icon4.png" alt="" srcset=""></a>
         </li>
         <li>
           <a href="https://github.com/GravitationUSGD">
             <img src="../assets/icon5.png" alt="" srcset="">
           </a>
         </li>
         <li>
           <a href="https://0.plus/GravitionUSGD"><img src="../assets/icon6.png" alt="" srcset=""></a>
         </li>
       </ul>
    </section>
    <section class="pupupMenu" v-show="munuShow">
       <ul>
          <li>
            <div>
              <input type="radio" name="sex" id="white">
              <label for="white" v-on:click="whiteShowFn">{{menuWhitePaper}}</label>
              <img src="../assets/downArrow.png"  alt="" srcset="" class="arrow" ref="arrow">
            </div>
            <transition name="fade">
              <div class="whitePaper" v-show="whiteShow">
                <a href="https://con-co.app/GRAVITATIONENEN.pdf" download="GRAVITATIONEN"><img src="../assets/nation1.png" alt=""><span>English</span></a>
                <a href="https://con-co.app/GRAVITATIONENCN.pdf"><img src="../assets/nation2.png" alt=""><span>中文</span></a>
                <a ><img src="../assets/nation3.png" alt=""><span>한국어</span></a>
                <a ><img src="../assets/nation4.png" alt=""><span>русский язык</span></a>
              </div>
            </transition>
          </li>
          <li>
            <input type="radio" name="sex" id="community">
            <label for="community">{{menuCommunity}}</label>
          </li>
          <!-- <li>
            <span>产品</span><img src="../assets/downArrow.png" alt="" srcset="">
          </li> -->
       </ul>
    </section>
    <vfooter></vfooter>
  </section>
</template>

<script>
import Vfooter from './Vfooter.vue'
import nation1 from "../assets/nation1.png"
import nation2 from "../assets/nation2.png"
import nation3 from "../assets/nation3.png"
import nation4 from "../assets/nation4.png"
export default {
  name: 'Home',
  data(){
    return{
      arrow:true,
      whiteShow: false,
      munuShow:false,
      languageShow:false,
      language:"English",
      languangeArr:[
        {
          img:nation1,
          lan:"English"
        },
        {
          img:nation2,
          lan:"中文"
        },
        {
          img:nation3,
          lan:"한국어"
        },
        {
          img:nation4,
          lan:"русский язык"
        }
      ]
    }
  },
  mounted() {
  },
  computed:{
    introduction(){
       return this.$store.state.i18n.introduction
    },
    networkImg(){
       return this.$store.state.i18n.networkImg
    },
    notice(){
       return this.$store.state.i18n.notice
    },
    networkWidth(){
       return this.$store.state.i18n.networkWidth
    },
    noticeWidth(){
       return this.$store.state.i18n.noticeWidth
    },
    menuWhitePaper(){
      return this.$store.state.i18n.menuWhitePaper
    },
    menuCommunity(){
      return this.$store.state.i18n.menuCommunity
    },
    menuProduct(){
      return this.$store.state.i18n.menuProduct
    },
  },
  methods:{
    whiteShowFn(){
      this.whiteShow = !this.whiteShow;
      this.$refs['arrow'].style=this.whiteShow?"transform:rotate(180deg)": "transform:rotate(0deg)"
    },
    switchLanguage(i){
      this.language=this.languangeArr[i].lan;
      switch (Number(i)) {
        case 1:
          this.$i18n.locale='cn'
          this.storeChange()
        break;
        case 2:
          this.$i18n.locale='kr'
          this.storeChange()
          break;
            case 0:
          this.$i18n.locale='en'
          this.storeChange()
          break;
            case 3:
          this.$i18n.locale='ja'
          this.storeChange()
          break;           
        default:
          this.$i18n.locale='cn'
          this.storeChange()
          break;
      }
    },
    storeChange(){
      this.$store.commit('increment', {
            menuProjectIntroduction:this.$t('message.menuProjectIntroduction'),
            menuAboutUs:this.$t('message.menuAboutUs'),
            menuWhitePaper: this.$t('message.menuWhitePaper'),
            menuCommunity:this.$t('message.menuCommunity'),
            menuProduct:this.$t('message.menuProduct'),
            menuWhitePaper: this.$t('message.menuWhitePaper'),
            selectPlaceholder:this.$t('message.selectPlaceholder'),
            introduction:this.$t('message.introduction'),
            networkImg:this.$t('message.networkImg'),
            networkWidth:this.$t('message.networkWidth'),
            noticeWidth:this.$t('message.noticeWidth'),
            notice:this.$t('message.notice'),
            noticeTitle:this.$t('message.noticeTitle'),
            noticeConect:this.$t('message.noticeConect')
          })
    }
  },
  components:{
     Vfooter,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .container{
      position: relative;
      height: 100%;
      background: url("../assets/banner.png") 0 0 no-repeat;
      background-size: 100% 100%;
      header{
        margin:0 40px;
        position: relative;
        display: flex;
        align-items: center;
        height: 160px;
        .logo{
          width: 260px;
          height: 40px;
          vertical-align: middle;
        }
        .right{
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 40px;
          color: white;
          .language{
            vertical-align: middle;
            font-size: 32px;
            em{
              vertical-align: middle;
            }
            img{
              margin:0 66px 0 12px;
              vertical-align: middle;
              width: 32px;
              height: 32px;
            }
          }
          ul{
            box-sizing: border-box;
            padding: 60px 0 0 40px;
            position: absolute;
            top: 60px;
            right: 10px;
            width: 340px;
            height: 380px;
            background: url("../assets/languangeBg.png") 0 0 no-repeat/ 100% 100%;
            li{
              margin-bottom: 40px;
              img{
                margin-right: 32px;
                width: 40px;
                height: 40px;
                vertical-align: middle;
              }
            }
          }
          .menu{
            vertical-align: middle;
            width: 44px;
            height: 44px;
          }
        } 
      }
      .introduction{
        padding:0 40px;
        margin-top: 160px;
        p{
          line-height: 44px;
          color: white;
          font-size: 28px;
          text-align: center;
        }
        .line{
          margin: 44px auto 588px auto;
          display: block;
          width: 60px;
          height: 4px;
        }
      }
      .notice{
        padding:0 40px;
        img{
          margin-bottom: 60px;
          width: 104px;
        }
        ul{
          height: 880px;
          li{
            position: relative;
            margin-bottom: 20px;
            width:670px;
            min-height:220px;
            background:rgba(255,255,255,0.2);
            border-radius:12px;
            color: white;
            h5{
              padding: 15px;
              font-size:36px;
              font-weight:400;
              line-height:50px;
            }
            p{
              padding: 0 15px;
              font-size: 28px;
              line-height: 44px;
            }
          }
        }
      }
      .btn{
        width:280px;
        height:72px;
        border-radius:40px;
        border:1px solid rgba(255,255,255,1);
        margin: 60px auto 120px auto;
        text-align: center;
        line-height: 72px;
        a{
          font-size: 28px;
          margin-right: 8px;
          vertical-align: middle;
          color: white;
        }
        img{
          margin: 0;
          width: 32px;
          height: 32px;
          vertical-align: middle;
        }
      }
      .network{
        padding:0 40px;
        .title{
          width: 208px;
        }
        ul{
          margin: 120px 0 160px 0;
          display: flex;
          li{
            flex: 1;
            text-align: center;
            img{
              width: 72px;
              height: 72px;
            }
          }
        } 
      }
      .pupupMenu{
        position: absolute;
        left: 0;
        top: 120px;
        width:100%;
        height:100%;
        box-sizing: border-box;
        background:rgba(0,0,0,0.9);
        padding: 0 20px;
        ul{
          margin-top: 60px;
          li{
            position: relative;
            min-height: 100px;
            line-height: 100px;
            color: white;
            .whitePaper{
              overflow: hidden;
              a{
                width: 50%;
                float: left;
                text-decoration: none;
                img{
                  margin: 0 20px;
                  width: 40px;
                  height: 40px;
                  vertical-align: middle;
                }
                span{
                  font-size:28px;
                  color: white;
                }
              }
            }
            input{
              display: none;
            }
            label{
              display: block;
            }
            input:checked~label{
              color: #44D7B6;
            }
          }
          .arrow{
              position: absolute;
              right: 0;
              top: 34px;
              margin: auto;
              width: 32px;
              height: 32px;
              transition: 0.5s;
          }
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transition: opacity .5s;
        opacity: 0;
    }
</style>
