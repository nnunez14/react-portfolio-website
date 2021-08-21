import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from '*.module.css';
import { Link } from 'react-router-dom';
import { relative } from 'path';
import blue_gradient from './../../assets/images/blue_gradient.jpeg';
import pro_headshot from './../../assets/images/pro_headshot.jpg';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex',
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        decoration: 'none'
    },
    main: {
        backgroundImage: `url(${blue_gradient});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black'
    },
    ul: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    headshot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topMargin: {
        margin: '3% 0 0 0'
    }

})

export const Home = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.main}>    
                <nav>
                    <div className={classes.navbar_container}>
                        <ul className={`${classes.ul} ${classes.navigation}`}>
                            <li>
                                <Link to='/' href="" className={classes.nav_a}>Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className={classes.nav_a}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/resume" className={classes.nav_a}>Resume</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={classes.nav_a}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={`${classes.headshot} ${classes.topMargin}`}>
                    <img src={pro_headshot} width="30%"/>
                </div>
                <div className={classes.headshot}>
                    <h1>Nathan Nunez</h1>
                </div>
                <div className={classes.headshot}>
                    <h3>Data Scientist</h3>
                </div>
            </div>
        </div>      
    )
};