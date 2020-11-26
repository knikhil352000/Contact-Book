import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import shortid from 'shortid';
import {useHistory, useParams} from 'react-router-dom';
import { addContact, getContact } from '../../actions/contactAction';

const EditContact = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contacts.contact);
    // console.log(contact);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    },[contact]); 
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add a contact
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
