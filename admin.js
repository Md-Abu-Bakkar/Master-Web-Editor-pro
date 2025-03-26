let users = [];

function addUser() {
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;

    if (email && password) {
        users.push({ email: email, password: password, active: false, subscription: "None" });
        updateUserList();
        alert("নতুন ইউজার তৈরি হয়েছে!");
    } else {
        alert("সব তথ্য দিন!");
    }
}

function activateUser(index) {
    users[index].active = !users[index].active;
    updateUserList();
}

function updateUserList() {
    let tableBody = document.getElementById("userList");
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${user.email}</td>
                <td>${user.active ? "✅ Active" : "❌ Inactive"}</td>
                <td>${user.subscription}</td>
                <td><button onclick="activateUser(${index})">${user.active ? "Deactivate" : "Activate"}</button></td>
            </tr>
        `;
    });
}

updateUserList();
