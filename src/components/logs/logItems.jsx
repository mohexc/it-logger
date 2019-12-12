import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLogs, setCurrent } from '../../actions/logActions';
import Moment from 'react-moment';

import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLogs, setCurrent }) => {

  const onDelete = () => {
    deleteLogs(log.id)
    M.toast({ html: "Log Deleted" })
  }

  return (
    <li className="collection-item">
      <div>
        <a href='#edit-log-modal' className={ `modal-trigger ${log.attention ? 'red-text' : 'blue-text'}` }
          onClick={ () => setCurrent(log) }
        >
          { log.message }
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{ log.id }</span> last update
          <span className='black-text'> { log.tech }</span> on { " " }
          <Moment format="MMM Do YYYY, h:mm:ss a">{ log.data }</Moment>
        </span>
        <a href='#!' onClick={ onDelete } className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

LogItem.prototype = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}


export default connect(null, { deleteLogs, setCurrent })(LogItem);  