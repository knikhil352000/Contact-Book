import { CREATE_CONTACT } from "../constant/type"

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    }
}