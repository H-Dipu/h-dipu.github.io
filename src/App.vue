<template>

  <div id="app">
    <cHeader :props_myName="Name"
             :props_student="students"
             :firstName="fName"
             :lastName="lName"
             :age="age"
             @updateFirstname="fName=$event"
    /> <cFooter/>

  </div>
</template>

<script>
import cHeader from './components/Header_Footer/Header';
import cFooter from './components/Header_Footer/Footer';
export default {
  data(){
    return{
     Name:'Dipu',
     students:['Dipu','Al-amin','Rasel','Parvez'],

      fName:'Md Hasanuzzaman',
      lName:'Dipu',
      age:28

    }
  },
  components:{
    cHeader,
    cFooter
  }

}
</script>

