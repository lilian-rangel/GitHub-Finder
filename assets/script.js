
(function() {
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    const url = "https://api.github.com/users";
    const client_id = "af605b816f514c724eac";
    const client_secret = "354ceb8f1e67e41339a0d0717464b149a12e90f6";

    async function getUser(user){
        const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);

        const profile = profileResponse.json();

        return profile;

    }

    search.addEventListener("keyup", (e) => {
        const user = e.target.value;

        if (user.length > 0) {
            getUser(user).then(res => console.log(res));
        }

    })
})();


