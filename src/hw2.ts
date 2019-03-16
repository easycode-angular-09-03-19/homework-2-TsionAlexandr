function firstUser {
    return function (targetClass) {
        return class {
            public type = 'user';
            public createDate {
                return new Date();
            }
        }    
    }
}

@firstUser();
class User {}

let guest = new User();
