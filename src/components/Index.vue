<template>
  <section class="wrap">
    <div class="home" v-show="isShow">
      <home />
    </div>
  </section>
</template>

<script>
import Home from './Home.vue'
// import Introduction from './Introduction.vue'
// import AboutUs from './AboutUs.vue'
// import WhitePaper from './WhitePaper.vue'
// import EcologicalConstruction from './EcologicalConstruction.vue'
// import RoadMap from './RoadMap.vue'
// import TopMenu from './TopMenu.vue'
// import { setTimeout } from 'timers';
export default {
  name: 'Index',
  data(){
    return{
    }
  },
  computed:{
    isShow(){
      return this.$store.state.isShow;
    }
  },
  components:{
    Home,
    // Introduction,
    // AboutUs,
    // WhitePaper,
    // EcologicalConstruction,
    // RoadMap,
    // Vfooter,
    // TopMenu
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .wrap{
    height: 100%;
  }
  .home,.menu{
    position: absolute;
    left: 0;
    top: 0;
  }
  .close{
    position: absolute;
    right: 0;
    top: 0;
  }
  .home{
    width: 100%;
  }
  .menu{
    z-index: 100
  }
</style>
