// Make array of current_users
let current_users = ["Arsalan", "SADIA", "Maham", "Hamza", "Sadaf", "Usama"];
// make array of new_users
let new_users = ["Asia", "Sadia", "Ambreen", "Hamza", "Urooj", "Rumaisa"];
//Loop through the new_users list to check user availability
new_users.forEach(new_one_user => {
    // Making a condition for users already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // print different massages in if and else statement
    if (our_condition) {
        console.log(`SORRY!!! ${new_one_user} , is already taken `);
    }
    else {
        console.log(`This username ${new_one_user} is available`);
    }
});
export {};
