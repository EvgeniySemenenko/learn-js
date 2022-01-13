
function User () {
     user = {
     name: 'John',
     user() {
       return this.name;
    }
}

const user = new User();
let name = user.user().user().user().user().user().user().name;
console.log(name);