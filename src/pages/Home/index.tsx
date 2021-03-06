import React, { useState, useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarsIcon from '@material-ui/icons/Stars';

import { useStyles, Header, Banner, Projects, About, Footer } from './styles';

import logo from '../../assets/logo.svg';

import tutorialSteps from '../../utils/tutorialSteps';

const Home: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default">
                <Container>
                    <Header>
                        <Toolbar className={classes.header}>
                            <img src={logo} alt="Wanquery" />
                            <main>
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    Home
                                </Link>
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 970,
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    Projetos
                                </Link>
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 1700,
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    Quem somos
                                </Link>
                                <Link
                                    className={classes.link}
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 3000,
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    Contato
                                </Link>
                            </main>
                        </Toolbar>
                    </Header>
                </Container>
            </AppBar>

            <Banner>
                <Container>
                    <div>
                        <Typography variant="h1">
                            WANQUERY <p>online</p>
                        </Typography>
                        <main>
                            <Typography variant="h5">
                                H?? mais de 2 anos gerando solu????es de
                                sustentabilidade e durabilidade para aplica????es
                                da sua empresa!
                            </Typography>
                        </main>
                    </div>
                </Container>
            </Banner>

            <Projects>
                <Typography variant="h4">Projetos desenvolvidos</Typography>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5">
                                    Space: A guerra na gal??xia
                                </Typography>
                                <Typography variant="subtitle1">
                                    Projeto desenvolvido para uma empresa de
                                    apps mobiles
                                </Typography>
                                <hr />
                                <Typography variant="subtitle1">
                                    Atualmente o app se encontra na Google Play.
                                    Muitos usu??rios se queixavam de travamentos
                                    durante a experi??ncia do jogo, onde era
                                    instanciado diversos inimigos e muitos
                                    celulares travavam. Elaboramos uma solu????o
                                    onde h?? um controle de inimigos instanciados
                                    e no tamanho do app.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5">
                                    Opportunity
                                </Typography>
                                <Typography variant="subtitle1">
                                    Projeto desenvolvido para uma consultoria de
                                    tecnologia verde
                                </Typography>
                                <hr />
                                <Typography variant="subtitle1">
                                    A opportunity foi criada em 2019 com a id??ia
                                    de construir um sistema todo voltado a TI
                                    Verde, onde era poss??vel o cadastro de
                                    clientes e login na aplica????o para
                                    acompanhar todas as atualiza????es sobre o
                                    tema.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5">FIPE</Typography>
                                <Typography variant="subtitle1">
                                    Projeto desenvolvido para uma empresa de
                                    consulta de tabela fipe e compra de
                                    autom??veis
                                </Typography>
                                <hr />
                                <Typography variant="subtitle1">
                                    Desenvolvemos uma solu????o para mostrar
                                    carros da toyota e seus respectivos valores
                                    na tabela Fipe. Recentemente fizemos uma
                                    atualiza????o, onde os clientes podem
                                    consultar qualquer autom??vel em que se
                                    interessar, juntamente com avalia????es de
                                    donos que j?? tiveram o respectivo autom??vel.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={7} className={classes.gridList}>
                            <Paper
                                square
                                elevation={0}
                                className={classes.headerCarousel}
                            >
                                <Typography>
                                    {tutorialSteps[activeStep].label}
                                </Typography>
                            </Paper>
                            <a
                                href={tutorialSteps[activeStep].imgPath}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className={classes.img}
                                    src={tutorialSteps[activeStep].imgPath}
                                    alt={tutorialSteps[activeStep].label}
                                />
                            </a>
                            <MobileStepper
                                className={classes.headerCarousel}
                                steps={maxSteps}
                                position="static"
                                variant="text"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button
                                        size="small"
                                        onClick={handleBack}
                                        disabled={activeStep === 0}
                                    >
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Projects>

            <About>
                <Typography variant="h4">Quem somos</Typography>
                <Container>
                    <Projects>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5">
                                        Um pouco sobre a Wanquery e objetivos
                                    </Typography>
                                    <hr />
                                    <Typography variant="subtitle1">
                                        A WanQuery foi criada em mar??o de 2019,
                                        focada em consultorias e suporte para
                                        empresas focadas em TI. N??s utilizamos
                                        como como o fator principal a
                                        sustentabilidade e durabilidade do que
                                        desenvolvemos, desta forma destacamos a
                                        cor verde no nosso logo. O mundo
                                        atualmente, est?? em um crescimento
                                        tecnol??gico continuo, e n??o saber como
                                        se adequar ??s novas necessidades e
                                        tend??ncias ?? um problema gigante para as
                                        empresas que buscam ter uma evolu????o
                                        continua. N??s da WanQuery acreditamos na
                                        satisfa????o do cliente, n??o importa qu??o
                                        cr??tica seja a situa????o, nossos servi??os
                                        de suporte t??cnico de TI, tornam as
                                        coisas simples e f??ceis, adaptando as
                                        necessidades de cada cliente.
                                        Trabalhando com organiza????es de
                                        diferentes portes, permitimos que os
                                        nossos clientes tirem o m??ximo proveito
                                        da sua infraestrutura de TI, visando
                                        sempre a satisfa????o do cliente e
                                        garantindo que a seguran??a da rede
                                        esteja funcionando com capacidade
                                        m??xima. Com a ajuda de softwares, por
                                        exemplo, ?? percept??vel o aumento da
                                        produtividade nas empresas, afinal
                                        automatizar processos n??o significa
                                        apenas economizar tempo, mas tamb??m tem
                                        impacto na agilidade e qualidade na
                                        execu????o das tarefas, na redu????o de
                                        custos e, principalmente, no aux??lio
                                        para tomada de decis??es.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className={classes.about}>
                                    <Typography variant="h5">
                                        Miss??o
                                        <CallMissedOutgoingIcon color="secondary" />
                                    </Typography>
                                    <hr />
                                    <Typography variant="subtitle1">
                                        O nosso objetivo ?? prover solu????es de
                                        Tecnologia atrav??s da excel??ncia em
                                        servi??o, que maximize o sucesso de
                                        nossos clientes, gerando relacionamentos
                                        duradouros.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className={classes.about}>
                                    <Typography variant="h5">
                                        Vis??o
                                        <VisibilityIcon color="secondary" />
                                    </Typography>
                                    <hr />
                                    <Typography variant="subtitle1">
                                        Construir uma empresa de Tecnologia com
                                        express??o mundial que, atrav??s de
                                        excel??ncia no servi??o, traga benef??cios
                                        tang??veis a todos os seus ???Stakeholders???
                                        colaborando de maneira permanente para o
                                        crescimento tecnol??gico nacional.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className={classes.about}>
                                    <Typography variant="h5">
                                        Valores
                                        <StarsIcon color="secondary" />
                                    </Typography>
                                    <hr />
                                    <Typography variant="subtitle1">
                                        <ul>
                                            <li>
                                                Paix??o, proatividade, disciplina
                                                e respeito
                                            </li>
                                            <li>
                                                Ter uma equipe inovadora,
                                                comprometida e ambiciosa
                                            </li>
                                            <li>
                                                Construir um ambiente
                                                prazeroso/encantador, vibrante,
                                                positivo, transparente e ??nico
                                            </li>
                                            <li>
                                                Incitar admira????o atrav??s da
                                                solu????o
                                            </li>
                                            <li>
                                                Construir rela????es abertas e
                                                honestas atrav??s da ??tica e
                                                comunica????o
                                            </li>
                                            <li>
                                                Buscar melhoria cont??nua,
                                                aprendizado e excel??ncia
                                            </li>
                                        </ul>
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Projects>
                </Container>
            </About>

            <Footer>
                <Container>
                    <Typography variant="h4">Contato</Typography>

                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Typography variant="h5">WANQUERY</Typography>
                            <Link
                                className={classes.link}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                className={classes.link}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 970,
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Projetos
                            </Link>
                            <Link
                                className={classes.link}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 1700,
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Quem somos
                            </Link>
                            <Link
                                className={classes.link}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 3000,
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Contato
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1">
                                (11) 95555-5555
                            </Typography>
                            <Typography variant="subtitle1">
                                contato@wanquery.com
                            </Typography>
                            <Link
                                className={classes.link}
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.log('atas de reuni??o');
                                }}
                            >
                                ATAS de reuni??o
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1">
                                &copy; Wanquery. Todos os direitos reservados.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Footer>
        </div>
    );
};

export default Home;
