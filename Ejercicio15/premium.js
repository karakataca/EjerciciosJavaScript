function getPremiumUsers(users) {
    let premiumUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].premium === true) {
            premiumUsers.push(users[i]);
        }
    }
    return premiumUsers;
}
function getNoPremiumUsers(users) {
    let premiumUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].premium === true) {
            premiumUsers.push(users[i]);
        }
    }
    return nopremiumUsers;
}
