<template>

  <div id="app">
    <cHeader></cHeader>
      <cFooter></cFooter>


  </div>
</template>

<script>
import cHeader from './components/Header_Footer/Header';
import cFooter from './components/Header_Footer/Footer';
export default {
  data(){
    return{

    }
  },
  comments:{
    cHeader,
    cFooter
  }

}
</script>

