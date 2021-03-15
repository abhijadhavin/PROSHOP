import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Vilas Jadhav",
        email: "vj@example.com",
        password: bcrypt.hashSync('123456', 10),        
    }
    ,
    {
        name: "Vinod Jadhav",
        email: "voj@example.com",
        password: bcrypt.hashSync('123456', 10),        
    }
]

export default users;