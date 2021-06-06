<template>
  <div id="app">
    <p>Client Data</p>
    <p>{{text}}</p>
    <ul>
      <li v-for="car in cars" :key="car"> {{car}}</li>
    </ul>
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