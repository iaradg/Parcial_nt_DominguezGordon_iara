

export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formstate : {},
      formData : this.getDataInicial(),
      notas : [],
      alumnos: [],
      sumaNotas:0,
      prom: this.sacarPromedio(),
      textMinLength : 3,
      textMaxLength : 15,
      notaMinLength:0,
      notaMaxLength:10
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    getDataInicial() {
      return {
        nombre : '',
        apellido: '',
        nota:0,
        
      }
    },
    enviar() {
      let alumno = {...this.formData}
      

      console.log(alumno)
      this.alumnos.push(alumno)
      this.notas.push(this.nota)
      this.sumaNotas+=alumno.nota
      this.formData = this.getDataInicial()
      this.formstate._reset()
      this.sacarPromedio()
    },
    sacarPromedio(){
      return this.sumaNotas/this.alumnos.length()
    },

    colorearNota() {
    
      let color = '#008000'
      
      if(this.nota >=0 && this.nota <4) {
        color = '#ff00ff'
      }
      if(this.nota >=4 && this.nota <7) {
        color = '#FFFF00'
      }
      if(this.nota >=7 && this.nota <11) {
        color = '#008000'
      }
   
      return {
        valor : this.nota,
        color
      }
      
    },
    

    colorearPromedio(){
      let color = '#008000'
      
      if(this.prom >=0 && this.prom <4) {
        color = '#ff00ff'
      }
      if(this.prom >=4 && this.prom <7) {
        color = '#FFFF00'
      }
      if(this.prom >=7 && this.prom <11) {
        color = '#008000'
      }
      return {
        valor : this.nota,
        color
      }
    }
    
  }
}


