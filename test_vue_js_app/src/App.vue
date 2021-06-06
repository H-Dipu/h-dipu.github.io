<template>

  <div id="app">
    <cHeader :props_myName="Name"
             :props_student="students"
             :firstName="fName"
             :lastName="lName"
             :age="age"
             @updateFirstname="fName=$event"
    />
    <cListHelper>

      <ul slot="list">
        <li v-for="lsHelper in listHelper" :key="lsHelper">{{lsHelper}} </li>
      </ul>
       <p slot="para"> This is paragraphs slot </p>

      <table :slot="loader" class="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{user.firstName}} {{user.lastName}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td>{{user.age}}</td>
        </tr>
        </tbody>
      </table>


    </cListHelper>
    <cFooter/>
    <cForm></cForm>

  </div>
</template>

<script>
import cHeader from './components/Header_Footer/Header';
import cFooter from './components/Header_Footer/Footer';
import cListHelper  from './components/ListHelper';
import cForm from './components/Form';
export default {
  data(){
    return{
     Name:'Dipu',
     students:['Dipu','Al-amin','Rasel','Parvez','Hasan'],
      users: [
        { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User',age:20 },
        { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
        { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
        { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
      ],

      fName:'Md Hasanuzzaman',
      lName:'Dipu',
      age:28,

      listHelper:['Html','CSS','Bootstraps','JavaScript','Laravel','Vue Js'],
      loader:''


    }
  },
  components:{
    cHeader,
    cFooter,
    cListHelper,
    cForm
  },
  created() {
    setTimeout(()=>{
      this.loader='other'
    },3000)
  }

}
</script>

