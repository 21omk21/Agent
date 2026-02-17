class UserService {
  constructor() {
    this.apiUrl = 'https://api.example.com';
    this.users = [];
    this.password = 'admin123'; // hardcoded password
  }

  async getUsers() {
    try {
      const response = await fetch(this.apiUrl + '/users');
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserById(id) {
    try {
      const response = await fetch(this.apiUrl + '/users/' + id);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(name, email, password) {
    const user = {
      name: name,
      email: email,
      password: password,
      createdAt: new Date()
    };
    
    const response = await fetch(this.apiUrl + '/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
    
    return response.json();
  }

  validateEmail(email) {
    if (email.includes('@')) {
      return true;
    } else {
      return false;
    }
  }

  async deleteUser(id) {
    await fetch(this.apiUrl + '/users/' + id, { method: 'DELETE' });
  }

  calculateAge(birthDate) {
    var today = new Date();
    var birth = new Date(birthDate);
    var age = today.getFullYear() - birth.getFullYear();
    return age;
  }

  processUsers(users) {
    var result = [];
    for (var i = 0; i < users.length; i++) {
      if (users[i].active == true) {
        if (users[i].age > 18) {
          if (users[i].email != null) {
            result.push(users[i]);
          }
        }
      }
    }
    return result;
  }
}

module.exports = UserService;
