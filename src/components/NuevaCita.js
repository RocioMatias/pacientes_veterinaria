import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial =  { 
    cita:{
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
 }


class Nuevacita extends Component {
    state = { ...stateInicial }

    //  Cuando el usuario escribe en los inputs
     handleChange = e => {
        //  console.log(e.target.name + ': ' + e.target.value);
        //  colocar lo que el usuaro escribe en el state
        this.setState({
            cita:{
                // Copia del estado con Spread o rest operator
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
     }

    //  Cuando el usuario envia el formulario

    handleSubmit = e => {
        e.preventDefault();

        // Extraer los valores del state

        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        // Validar que todos los campos esten llenos

        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || 
        sintomas === ''){
            this.setState({
                error: true
            })
            // Detener la ejecución con un return
            return;
        }

        // Generar un objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        // Agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita)

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    }

    render() {

        // extraer el valor del state
        const {error} = this.state;

        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    {/* alerta para validar el envio del formuario con todos los campos llenos */}
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los cambios son obligatorios</div>: null}

                    <form
                       onSubmit={this.handleSubmit}
                    >

                        {/* mascota */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nombre Mascota"
                                  name="mascota"
                                  onChange={this.handleChange}
                                  value={this.state.cita.mascota}
                                />
                            </div>
                        </div> {/* cierre del form group*/}

                        {/* Dueño */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nombre Dueño Mascota"
                                  name="propietario"
                                  onChange={this.handleChange}
                                  value={this.state.cita.propietario}
                                />
                            </div>
                        </div> {/* cierre del form group*/}

                        {/* Fecha y hora  */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Feha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                  type="date"
                                  className="form-control"
                                  name="fecha"
                                  onChange={this.handleChange}
                                  value={this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                  type="time"
                                  className="form-control"
                                  placeholder="Nombre Mascota"
                                  name="hora"
                                  onChange={this.handleChange}
                                  value={this.state.cita.hora}
                                />
                            </div>
                        </div> {/* cierre del form group*/}
                        
                        {/* Campo para describir los síntomas */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">

                                <textarea
                                   className="form-control"
                                   name="sintomas"
                                   placeholder="Describe los síntomas"
                                   onChange={this.handleChange}
                                   value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div> {/* cierre del form group*/}

                        {/* Boton */}
                        <input 
                          type="submit" 
                          className="py-3 mt-2 btn btn-success btn-block"
                          value="Agregar Nueva Cita"></input>

                    </form>

                </div>
            </div>
         );
    }
}

Nuevacita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
} 
export default Nuevacita;