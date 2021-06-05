<template>
  <div id="app">
    <p> Header {{props_myName}}</p>
    <ol>
    <li v-for="stu in props_student" :key="stu">
      {{stu}}
    </li></ol>

    <p>First Name: {{firstName}}</p>
    <p> Last Name: {{lastName}}</p>
    <p> Age: {{age}}</p>
    <button @click="updateName()"> Change Name</button>

  </div>


</template>

<script>
export default {
 // props:['props_myName','props_student'],
  props:{
    props_myName:{
          type:String,
          required:true
        },
    props_student:{
          type:Array,
          required: true
    },
    firstName: {
      type:String,
      required:true
    },
    lastName: String,
    age:Number
  },
  methods:{
    updateName(){
        // this.firstName=" Al-amin";
         this.$emit('updateFirstname','Al-amin');
    }
  }
}
</script>