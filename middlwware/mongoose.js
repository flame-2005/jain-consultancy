const {username,password} = process.env
console.log(username,password)
export const connection = "mongodb+srv://shadab:"+password+"@cluster0.zmgpxe9.mongodb.net/?retryWrites=true&w=majority"