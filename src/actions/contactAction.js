import { CREATE_CONTACT, GET_CONTACT } from "../constant/type"

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    }
}

//get a contact

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
})
