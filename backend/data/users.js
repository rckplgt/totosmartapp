
import bcryptjs from "bcryptjs"


const users = [{
    name: "Admin User",
    email: "admin1@example.com",
    password: bcryptjs.hashSync("12345"),
    isAdmin: true

},{
    name: "John Doe",
    email: "johndoe@example.com",
    password: bcryptjs.hashSync("12345")

},{
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: bcryptjs.hashSync("12345")
}]

export default users