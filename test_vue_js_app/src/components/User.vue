<template>
  <div id="app">
    <p>User Data</p>
    <p>{{text}}</p>
    <ol>
      <li v-for="car in cars" :key="car"> {{car}}</li>
    </ol>
  </div>
</template>

<script>
import  {carMixin} from "./mixins";

export  default {
  data(){
    return{
      // text:" Hello World",

    }
  },
  mixins:[carMixin]

}
</script>

<style>

</style>