import ShowProfile from "../components/ShowProfile";
import Activities from "../components/Activities";

import users from "../data/mockProfiles";

import "./css/ProfilePage.css"

function ProfilePage() {

    const User = users[Math.floor(Math.random() * users.length)];

    return(
        <div className="container mt-5">
            <ShowProfile user={User} />
            <Activities />
        </div>
    )
}

export default ProfilePage;
