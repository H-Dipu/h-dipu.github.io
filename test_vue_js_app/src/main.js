import Vue from 'vue'
import App from './App.vue'
//import App from './App2.vue'
//import App1 from './App1.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'


Vue.config.productionTip = false
//global filter
Vue.filter('removeText',(value)=>{
    return  value.slice(0,-2);
})

// Custom Directive: Global
Vue.directive('testDirective',{
   // bind(el){
   //   el.innerHTML="Hello World";
   // }
  bind(el,binding){
    el.innerHTML=binding.value;
   // el.style.color='red'
    /*if (binding.arg==='colorGreen'){
          el.style.color='green'
    }
    if(binding.arg==='colorRed'){
      el.style.color='red'
    }*/

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
})

new Vue({
  render: h => h(App),
}).$mount('#app')
