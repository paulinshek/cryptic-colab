import React, { FunctionComponent } from "react";
import {useSelector} from "react-redux"

import {RootState} from "../store/rootTypes"
import { User } from "../store/authentication/authenticationTypes";


const CurrentUserGreeting: FunctionComponent = (): JSX.Element => {

    const currentUser:User | null = useSelector(
        (state: RootState) => state.authentication.currentUser
    );

    return (
        <div className="current-user-greeting">
            <p>Welcome {currentUser?.name}</p>
            <p>({currentUser?.email})</p>
        </div>
    )
    
};

export default CurrentUserGreeting;