<template>

    <section class="src-componentes-choice">
    <h1>Respuestas Choice</h1>
    <table>
        <tr>
        <th>Numero de Pregunta</th>
        <th>Respuesta</th>
        </tr>
        <tr v-for="(preg,index) in preguntas" :key="index" >
        <td>{{preg.numero}}</td>
        <td>{{preg.respuestas}}</td>
       </tr>
    </table>
    </section>

</template>

<script>

  export default  {
    name: 'src-componentes-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
          preguntas : [
            { numero: 1, respuestas: ["C"] },
            { numero: 2, respuestas: ["C"] },
            { numero: 3, respuestas: ["B"] }
          ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-choice {
   color:rgb(0, 0, 0);
}
  table {
    border-collapse: collapse;
    width: 60%;
    font-size: 20px;
    background-color: rgb(255, 184, 20);
    
  }
  
  td, th {
    border: 3px solid rgb(0, 0, 0);
    text-align: left;
    padding: 8px;
  }
</style>
