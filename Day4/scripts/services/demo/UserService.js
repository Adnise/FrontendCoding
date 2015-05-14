hrApp.service('UserService', function () {
        var userList = [];
        return {
            addUser: function (user) {
                userList.push(user);
                alert('User '+user.firstName+' '+user.lastName+' was saved!');
            },
            getList: function () {
                return userList;
            }
        }
    }
);