<template lang="pug">
  .skill-container
    h2 {{category.category}}
    hr
    table
      
    hr
    .add-skill-wrapper.blocked
      input(type="text" v-model="skill.title" placeholder="Добавить скилл")
      input(type="text" v-model="skill.percent" placeholder="Проценты")
      button(type="button" @click="addNewSkill") Добавить
  
</template>

<script>
// import { mapActions } from "vuex";
// export default {
//   props: {
//     category: Object,
//     skills: Array,
//   },
//   data() {
//     return {
//       skill: {
//         category: this.category.id,
//         title: "",
//         percent: ""
//       }
//     }
//   },
//   methods: {
//     ...mapActions('skills', ['addSkill']),
//     async addNewSkill() {
//       try {
//         await this.addSkill(this.skill);
//       } catch (error) {
//         // error 
//       }
//     }
//   }
// };
</script>
