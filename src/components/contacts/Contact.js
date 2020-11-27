import React from "react";
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
import { deleteContact } from "../../actions/contactAction";
import {useDispatch} from 'react-redux';
const Contact = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <label className="custom-control-label"></label>
          </div>
        </td>
        <td>
            <Avatar className="mr-2" name={props.contact.name} size="45" round={ true }/>
            {props.contact.name}</td>
        <td>{props.contact.phone}</td>
        <td>{props.contact.email}</td>
        <td className="actions">
            <Link to={`/contacts/edit/${props.contact.id}`}>
                <span className="material-icons mr-2 text-danger">edit</span>
            </Link>
            <button onClick={() => dispatch(deleteContact(props.contact.id))}>
                <span className="material-icons">remove_circle</span>
            </button>
        </td>
      </tr>
    </>
  );
};

export default Contact;
