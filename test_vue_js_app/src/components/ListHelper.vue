<template>
<div>
  Hello I am List Helper slot
  <slot name="list"></slot>
  <slot name="para"></slot>
  <slot name="other"> Loading data plz wait</slot>
</div>
</template>

<script>
export default {
    data(){
      return{

      }
    }
 }
</script>

<style>
ul li{
  color: brown;
}
p {
  color: green;
}

</style>