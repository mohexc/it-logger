import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from './../../actions/techActions';
import M from "materialize-css/dist/js/materialize.min.js"


const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {

  const onDelete = () => {
    deleteTech(id)
    M.toast({ html: `${firstName} ${lastName} Technician deleted` })
  }

  return (
    <li className="collection-item">
      { firstName } { lastName }
      <a href="#!" className="secondary-content" onClick={ onDelete }>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
}

TechItem.prototype = {
  tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech })(TechItem)