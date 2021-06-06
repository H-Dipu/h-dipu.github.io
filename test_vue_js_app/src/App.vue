<template>

  <div  class="container" id="app" >
    <!-- Start vue js animations-->
    <!---
    <transition name="appear">
      <div class="p-3 mb-2 bg-success text-white" v-if="display"> I am Header Div</div>
    </transition>

    <button @click="display=!display"> Toggle</button>
       --->
    <!-- End vue js animations-->

    <!-- Start vue js animations Custom Transition Classes-->
    <transition name="appear"
                enter-active-class="animate__animated  animate__fadeInDown animate__slow"
                leave-active-class="animate__animated animate__fadeInUp">
      <div class="p-3 mb-2 bg-success text-white" v-if="display"> I am Header Div</div>
    </transition>

    <button @click="display=!display"> Toggle</button>
    <!-- End vue js animations Custom Transition Classes-->

    <p>Custom Directive: Global with just el </p>
<!--    <div v-testDirective></div>-->

<!--    <div v-testDirective="'MD HASANUZZAMAN DIPU'"></div>-->
<!--    <div v-testDirective:colorGreen="directiveData"></div>-->
<!--    <div v-testDirective:colorRed="directiveData"></div> -->

    <div v-testDirective.colorGreen.textSizeBig="globalDirectiveData"></div>
    <div v-testDirective.colorRed.textSizeSamll="globalDirectiveData"></div>
<!--------------------------------------->
    <p>Custom Directive:local</p>
    <div v-user.colorGreen.textSizeBig="localDirectiveData"></div>
    <div v-user.colorRed.textSizeSamll="localDirectiveData"></div>
    <!-- Filters local-->
    <p>Filters local</p>
    <p>{{filterData}}</p>
    <p>{{filterData |toLowerCase | removeText }}</p>
    <p>Filter global</p>
    <p>{{filterData | removeText }}</p>
<!--- start mixins------->
    <cUser/>
    <cClient/>
    <!--- End  mixins------->
  </div>
</template>

<script>
import cUser from './components/User'
import cClient from './components/Client'

export default {
  data(){
    return{
      display: false,
      globalDirectiveData: "MD HASANUZZAMAN DIPU",
      localDirectiveData: "Mr Al-amin ",

      filterData:'BANGLADESH'
    }
  },
  components:{
    cUser,
    cClient
  },
  // Custom Directive:local
 directives:{
    'user':{
      bind(el,binding){
         el.innerHTML=binding.value;
        if (binding.modifiers.colorGreen){
          el.style.color='green'
        }
        if(binding.modifiers.colorRed){
          el.style.color='red'
        }
        if (binding.modifiers.textSizeBig){
          el.style.fontSize='20px'
          el.style.textAlign='center'
          el.style.textDecoration='line-through'
        }
        if(binding.modifiers.textSizeSamll){
          el.style.fontSize='10px'
          el.style.textDecoration='underline overline'
          el.style.textDecorationColor='blue'
        }
      }
    }
 },
  //local filters
  filters:{
    toLowerCase(value){
      return  value.toLowerCase();

    },
    // removeText(value){
    //   return  value.toLowerCase();
    //
    // },
  }

}
</script>

<style>

/*.appear-enter{*/
/*opacity: 0;*/
/*  transform: translateX(30px);*/
/*}*/
/*.appear-enter-active{*/
/*!*transition: opacity 3s;*!*/
/*transition: all .3s ease;*/
/*}*/
/*.appear-leave{*/

/*}*/
/*.appear-leave-active{*/
/*  opacity: 0;*/
/*  !*transition: opacity 1s;*!*/
/*  transform: translateX(1000px);*/
/*  transition: all .9s ease;*/
/*}*/

</style>