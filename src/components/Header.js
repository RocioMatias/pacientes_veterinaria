import React from 'react';
import PropTypes from 'prop-types';

// Stateless functional component
// titulo es un prop atraves de un destructuring

const Header = ({titulo}) => ( 

    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);


//Se utiliza para documentar la aplicacioón para saber que tipo de datos esperas
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header ;
