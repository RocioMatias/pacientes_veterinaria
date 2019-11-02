import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from  './components/NuevaCita'
import ListaCitas from  './components/ListaCitas'


class App extends Component {
  state = { 
    citas: []
   }

   //Cuando la aplicación carga
   
   componentDidMount(){
     const citasLS = localStorage.getItem('citas');
     if(citasLS) {
       this.setState({
         citas: JSON.parse(citasLS)
       })
     }
   }

   //cuando agregamos o eliminamos un nueva cita (local storage no soporta arreglos por lo que se connvierte con JSON. stringify)
   componentDidUpdate (){
     localStorage.setItem('citas', JSON.stringify(this.state.citas))
   }
   
   //  Si pasas una función que tome un parametro, que tome un dato qde esa forma pasas del hijo hacia el padre
   crearNuevaCita = datos => {
     //copiar el state actual 
     const citas  = [...this.state.citas, datos];
     // console.log(cita);

     // agregar el nuevo state
     this.setState({
       citas
      })
   }

  //  elimina las citas del state
  eliminarCita = id => {
    // console.log(id);
    // console.log('diste click');

    //Tomar una copia del state
    const citasActuales = [...this.state.citas];

    //Utilizar filter para sacar el elmento @id del arreglo
    const citas = citasActuales.filter(cita=> cita.id !== id)

    //Actualizar el state
    this.setState({
      citas
    })
  }

  render() { 
    return ( 
      <div className="container">
        <Header
          titulo='Administrador Pacientes Veterinaria'
        />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              // Mismo nombre de la función mismo nombre del props
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          {/* {console.log(this.state.citas)} */}
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>

        </div>
      </div>
     );
  }
}
 
export default App;


