import React from 'react';
import {Paper} from '@material-ui/core';
import not_my_image from '../../assets/images/inameyoukevin.png'

export const Signin = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <p>image courtesy of bandmemes666</p>
            <Paper variant="outlined">
                <img src={`${not_my_image}`} alt="band meme"/>
            </Paper>
        </div>
    )
}


// import React from 'react';
// import './App.css';
// import { Typography } from 'material-ui/core'

// function App() {

//     return(
//         <div className="App">
//             <Typeography gutterBottom variant="h3" align="center">
//                 React-App
//             </Typeography>
//         </div>
//     )

// }