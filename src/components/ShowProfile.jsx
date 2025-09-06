import React from "react";

import "./css/ShowProfile.css"

function ShowProfile({ user }) {

    return (
        
        <div className="d-flex align-items-center p-3">

            <img
                src={user.imgUrl}
                alt={"Perfil de ${user.name}"}
                className="rounded-circle me-4 profile-picture"
            />

            <div>
                <h1 className="mb-0 fw-bold d-flex align-items-center">
                    {user.name} 
                    {user.isVerified ? (
                        <span className="ms-1 text-primary" title="Verificado">
                        <i className="bi bi-patch-check-fill"></i>
                        </span>
                    ) : (
                        <span className="ms-1 unverified-user" title="Não verificado">
                        <i className="bi bi-patch-check"></i>
                        </span>
                    )}
                </h1>
                <ul className="mb-0 list-unstyled">
                    <li className="text-muted">{user.email}</li>
                    <li className="text-muted">{user.number}</li>                   
                </ul>           
            </div>

        </div>

    )
}

export default ShowProfile;
