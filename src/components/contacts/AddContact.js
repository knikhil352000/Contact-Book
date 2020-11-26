import React, {useState} from 'react'

const AddContact = () => {
    const [name, setName] = useState("");
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
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter Your Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control"
                        placeholder="Enter Your Email"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
