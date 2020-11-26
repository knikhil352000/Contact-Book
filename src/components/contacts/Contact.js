import React from "react";
import Avatar from 'react-avatar';
const Contact = (props) => {
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
            <a href="/">
                <span className="material-icons mr-2 text-danger">edit</span>
            </a>
            <a href="/">
                <span className="material-icons">remove_circle</span>
            </a>
        </td>
      </tr>
    </>
  );
};

export default Contact;
