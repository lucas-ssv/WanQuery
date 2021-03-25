import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        link: {
            fontSize: 14,
            marginRight: 20,
            color: '#000',
        },
        title: {
            flexGrow: 1,
        },
        paper: {
            height: '100%',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
            borderBottom: '1px solid #009761',
        },
        about: {
            height: '100%',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
            background: '#ddd',
        },
        gridList: {
            margin: '0 auto',
        },
        headerCarousel: {
            display: 'flex',
            alignItems: 'center',
            height: 50,
            paddingLeft: theme.spacing(4),
            backgroundColor: '#999',
            color: '#fff',
        },
        img: {
            height: 400,
            maxWidth: 800,
            overflow: 'hidden',
            display: 'block',
            width: '100%',
        },
    })
);

export const Header = styled.div`
    img {
        width: 160px;
    }
`;

export const Banner = styled.div`
    width: 100%;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')
        no-repeat;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;

        p {
            color: #009761;
        }

        h1 {
            font-weight: bold;
            color: #fff;
            text-align: center;
        }

        main {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #222;
            border-radius: 4px;
            margin-top: 15px;
            padding: 20px;

            h5 {
                width: 500px;
                color: #fff;
                text-align: center;
            }
        }
    }
`;

export const Projects = styled.div`
    margin-top: 30px;
    text-align: center;

    h4 {
        margin-bottom: 30px;
    }

    h5 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h6 {
        color: #666;
    }

    hr {
        margin: 15px auto;
        width: 50%;
    }

    ul {
        text-align: left;
        padding: 5px;
    }

    svg {
        margin-left: 5px;
        align-self: center;
    }
`;

export const About = styled.div`
    background: #f5f5f5;
    text-align: center;
    margin-top: 30px;
    padding: 30px;
`;

export const Footer = styled.div`
    background: #222;
    color: #fff;
    padding: 30px;

    h4 {
        text-align: center;
        margin-bottom: 20px;
    }

    h5 {
        font-weight: bold;
    }

    button {
        display: flex;
        flex-direction: column;
        color: #fff;
        margin: 10px 0;
    }
`;
