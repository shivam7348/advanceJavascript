function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUserName(username)
    this.email = email
    this.password = password
   
}

const shimmi = new createUser("chai, ")