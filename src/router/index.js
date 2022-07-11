import React from "react";
import {Route, Routes} from 'react-router-dom';

import {MAIN_LINK} from "./links";
import {Main} from "../page";

function MainRoute() {
    return (
        <Routes>
            <Route exact path={MAIN_LINK} element={<Main />}/>
        </Routes>
    );
}

export default MainRoute;

