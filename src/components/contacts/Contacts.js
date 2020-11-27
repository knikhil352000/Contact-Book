import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Contact from "./Contact";
import {selectAllContact, clearAllContact, deleteAllContact} from '../../actions/contactAction'

const Contacts = () => {
  const contacts = useSelector((state) => state);
  // console.log(contacts);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const selectedContacts = useSelector(state => state.contacts.selectedContacts);

  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContact(contacts.contacts.contacts.map(contact => contact.id)));
    }else{
      dispatch(clearAllContact());
    }
  },[selectAll])
  return (
    <div>
      {
        selectedContacts.length > 0 ? (
          <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())}>Delete All</button>
        ) : null
      }
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input onChange={() => setSelectAll(!selectAll)} id="selectAll" type="checkbox" className="custom-control-input" />
                <label value={selectAll} htmlFor="selectAll" className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.contacts.contacts.map((contact) => (
            <Contact selectAll={selectAll} contact={contact} key={contact.id}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
