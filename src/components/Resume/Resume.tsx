import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from '*.module.css';
import { Link } from 'react-router-dom';
import { relative } from 'path';
import blue_gradient from './../../assets/images/blue_gradient.jpeg';

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
    nav_ul: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    ul: {
        listStyle: 'circle',
        listStyleType: 'circle',
        listStylePosition: 'inside'
    },
    li: {
        listStyle: 'circle',
        listStyleType: 'circle'
    },
    margins: {
        margin: '3% 0 0 10%'
    },
    topMargin: {
        margin: '1% 0 0 0'
    }

})

export const Resume = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.main}>    
                <nav>
                    <div className={classes.navbar_container}>
                        <ul className={`${classes.nav_ul} ${classes.navigation}`}>
                            <li>
                                <Link to='/' href="" className={classes.nav_a}>Home</Link>
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
                {/* Add Resume Here */}
                <div className={classes.margins}>
                    <h1>Languages</h1>
                    <ul className={`${classes.ul} ${classes.topMargin}`}>
                        <li>
                            Python
                        </li>
                        <li>
                            HTML/CSS
                        </li>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            Flask
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            NumPy
                        </li>
                        <li>
                            Pandas
                        </li>
                        <li>
                            Matplotlib
                        </li>
                        <li>
                            PySpark
                        </li>
                        <li>
                            Sci-kit learn
                        </li>
                    </ul>
                    <div className={classes.topMargin}>
                    <h1>Certificates</h1>
                    <ul className={`${classes.ul} ${classes.topMargin}`}>
                        <li>
                            Full-Stack Certificate of Completion
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>      
    )
};