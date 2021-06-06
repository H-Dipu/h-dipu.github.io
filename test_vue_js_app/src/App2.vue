<template>

  <div  class="container" id="app" >
    <button @click="componentsToRender='cHome'">HOME</button>
    <button @click="componentsToRender='cContact'"> CONTACT</button>
    <button @click="componentsToRender='cAbout'">ABOUT</button>

    <keep-alive>
      <component :is="componentsToRender"></component>
    </keep-alive>


  </div>
</template>

<script>
import cHome from'./components/Home';
import cContact from './components/Contact';
import  cAbout from './components/About';
export default {
  data(){
    return{
      componentsToRender:'cContact',
    }
  },
  components:{
    cHome,
    cAbout,
    cContact
  },
  created() {
    setTimeout(()=>{
      this.loader='other'
    },3000)
  }

}
</script>

