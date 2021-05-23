import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from '@theme/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Particles from 'react-particles-js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/static_website.css';

const lightTheme = makeStyles({
    heroHead:{
      backgroundColor:"transparent"
    },
    card:{
      backgroundColor: '#FFFFFF'
    },
    imgcard:{
      display:'block',
      width:50,
      margin: 'auto',
      marginTop: 30,
      marginBottom: 30 
    },
    overline:{
      fontFamily: "Roboto",
      fontSize: 12.7,
    },
    title: {
      fontSize: 21.1,
      fontWeight: "bold",
    },
    body: {
      fontSize: 13.8,
      height:55
    },
    media: {
      objectFit: "cover",
      objectPosition:"bottom",
    }
  });

const ParticleSection = () => {
  return(
    <Particles
      height={"90vh"}
      style={{backgroundColor:"#f7f7f7"}}
      params={{ 
        particles: { 
          number: {
            value: 100,
            max: -1,
            density: {
                enable: true,
                area: 1500
            }
          },
          color: {
            value: "#bdbdbd",
          },
          links: {
            color: "#bdbdbd",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
          move: {
            direction: "top",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },    
        }, 
      }} 
    />
  );
}

function Scroll(){
    $("html,body").animate(
      {
        scrollTop: 550,
      },
      "slow"
    );
}

const HeroSection = () => {
  return (
    <div>
        <ParticleSection />
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: 'transparent'
          }}
         className="pt-0 pl-4 pr-4 content-header"
         >
          <img className="img-fluid" src="images/latamlink_logo-header.svg" alt="" />
          <div className="container-fluid text-center">
              <button onClick={Scroll} id="more" style={{fontSize: '5em'}} className="text-secondary btn bg-transparent">
                  <i className="fas fa-angle-down" style={{color:"#0bb155"}}></i>
              </button>
          </div>
        </div>
    </div>
  );
}

const AboutCards = (props) => {
    return (
        <div className="information-card">
            <div className="text-top mr-4">
                <img src={props.img} width="110" alt="" />
            </div>
            <div>
                <h4>{props.title}</h4>
                <p className="information-card-text text-justify"> {props.body}</p>
            </div>
        </div>
    );
}

const AboutSection = () => {
    return (
        <section id="acerca" className="mt-5 pr-2 pl-2 mb-5 information-grid">
            <AboutCards 
                img="images/latamlink_Floor_Light_1853.svg"
                title="Aprender sobre Blockchain"
                body=" LACChain EOSIO le permite explorar los beneficios de la tecnología blockchain EOSIO para proyectos en Latinoamérica."
            ></AboutCards>
            <AboutCards 
                img="images/latamlink_finger_108.svg"
                title="Pon tus dApps a prueba"
                body="LACChain EOSIO provee un ambiente local para desarrollar y probar apps descentralizadas (dApps)."
            ></AboutCards>
            <AboutCards 
                img="images/latamlink_cog_104.svg"
                title="Prueba tu infraestructura"
                body="LACChain EOSIO incluye una plataforma sólida para que desarrolladores y organizaciones prueben su infraestructura blockchain."
            ></AboutCards>
        </section>
    );
}

const InformationSection = () => {
    return (
      <div className="mt-5 mb-5 pb-3 information-grid-footer">
        <div className="information d-flex flex-column">
          <div className="text-justify">
            <h2 className="text-left mb-4 font-weight-bold">
              <span className="underline">
                ¿Qué es LatamLink?
              </span>
            </h2>
            <br />
            <span>
              LatamLink es una alianza regional voluntaria liderada por empresas
              tecnológicas latinoamericanas. Desarrollamos un testnet basado en EOSIO para la red <a
                style={{color: "#5bb517"}}
                href="https://www.lacchain.net/"
                target="blank">LACChain</a> con el fin de resaltar los beneficios de esta tecnología. LACChain EOSIO utiliza
              una
              versión pública permisionada de la tecnología EOSIO para que desarrolladores y organizaciones puedan probar
              sus aplicaciones descentralizadas e infraestructura.
            </span>
            <h2 className="h3" style={{padding: "20px 0 0 0"}} >
              ¿Qué es LACChain?
            </h2>
            <span>
              LACChain es una iniciativa de BID Labs (parte del <a style={{color: "#5bb517"}}  href="https://www.iadb.org/en"
                target="_blank">Banco Interamericano de Desarrollo</a>)
              cuyo propósito es acompañar y acelerar el desarrollo del ecosistema de blockchain en Latinoamérica. LACChain
              busca establecer consorcios nacionales en la región, desarrollar y promover estándares de interoperablidad
              en
              redes, y desarrollar y dar mantenimiento a infraestructuras interoperables de blockchain.
            </span>
            <h2 className="h3"  style={{padding: "20px 0 0 0"}}>
              ¿Qué es EOSIO?
            </h2>
            <span>
              EOSIO es una tecnología blockchain de siguiente generación lanzada en 2018 por <a style={{color: "#5bb517"}}
                href="https://block.one/" target="_blank">block.one</a>, una compañía líder que ofrece soluciones
              blockchain de alto rendimiento. EOSIO permite mayor flexibilidad, escalabilidad y costo-eficiencia, por lo
              que su red puede llegar a tener hasta 4.000 transacciones por segundo.
            </span>
            <h3 className="h4"  style={{padding: "20px 0 0 0"}}>
              LatamLink es liderado por:
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a target="_blank" href="https://www.eosargentina.io/">EOS Argentina</a>
              </li>
              <li className="list-group-item">
                <a target="_blank" href="https://eoscostarica.io/">EOS Costa Rica</a>
                <br />
              </li>
              <li className="list-group-item">
                <a target="_blank" href="https://eosvenezuela.io/">EOS Venezuela</a>
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
        <div className="information-img">
          <img className="img-fluid" src="images/map-content-home.png" alt="" />
        </div>
      </div>
    );
}

const GetStartedSteps = (props) => {
    return (
        <div className="get-started-step">
            <img className="get-started-icon" height="30" width="30" src={props.img} alt="Explorar EOSIO" />
            <p className="ml-4 text-justify">
                <strong className="h4">{props.title}</strong>
                <br />
                <br />
                <span>{props.body}
                    <a href={props.href} target="_blank">{props.info}</a>.
                </span>
            </p>
        </div>
    );
}

const WhyChoose = () => {
    return (
      <section id="iniciar" className="get-started-structure pt-5 pl-3 pr-3 pb-5">
        <div className="mt-5 mb-5 get-started-header">
          <h2 className="h1 text-center font-weight-bold">
            <span className="underline">¿Por qué elegir LACChain EOSIO?</span>
          </h2>
        </div>
        <div className="get-started-steps">
          <GetStartedSteps
              title="1. Permite explorar EOSIO"
              img="images/latamlink_Rocket_1885.svg"
              body="EOSIO es una tecnología blockchain de código abierto que permite mayor flexibilidad, escalabilidad y
              costo-eficiencia, ideales para desarrollar soluciones empresariales y de impacto social."
              href="https://eos.io/"
              info=" Lea más sobre EOSIO aquí"
          ></GetStartedSteps>
          <GetStartedSteps
              title="2. Somos parte de la iniciativa LACChain"
              img="images/latamlink_sun_1004125.svg"
              body="LACChain es una iniciativa de BID Lab para fomentar un ecosistema blockchain en Latinoamérica. El equipo
              de LACChain forma alianzas con compañías líderes en la industria de
              blockchain e integra las principales tecnologías blockchain dentro de su red LACChain. Para más
              información sobre LACChain,"
              href="https://medium.com/@lacchain.official/what-is-the-lacchain-global-alliance-and-what-does-it-consist-of-861cb76257b1"
              info=" dirígase a este link"
          ></GetStartedSteps>
          <GetStartedSteps
              title="3. Ofrece una solución integral"
              img="images/latamlink_Rocket_1885.svg"
              body="LACChain EOSIO utiliza una versión pública permisionada de la tecnología EOSIO para Latinoamérica.
              Incluimos características como un ambiente local de desarrollo y prueba, un servicio de monitoreo,
              adaptabilidad a API endpoints, billeteras y otras herramientas. Puede ver la lista completa más
              abajo."
              href=""
              info=""
          ></GetStartedSteps>
        </div>
        <img className="img-fluid get-started-img" src="images/mobile-previews-fake.png" alt="" />
    </section>
    );
}

const BannerSection = () => {
    return (
        <section className="banner">
            <h4 className="font-weight-light text-center">
            "LatamLink is a voluntary regional alliance to highlight the benefits
            of the EOSIO blockchain."
            </h4>
            <img className="img-fluid" src="images/latamlink_logo-footer.svg" alt="" />
      </section>
    );
}

const CustomCard = (props) => {
  let classes = lightTheme();

  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea onClick={() => window.open(props.href, "_self")}>
        <div className="card-img-container"> 
          <img src={props.img} className={classes.imgcard}/>
        </div>
        <CardContent>
          <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{props.title}</Typography>
          <Typography className={classes.body} variant="body2" component="p">{props.body}</Typography>
        </CardContent>
      </CardActionArea>
  </Card>
  );
}

const ToolsSection = () => {
  return (
    <section id="herramientas" className="d-flex pb-5 pt-5 flex-column justify-content-sm-center">
      <div className="tools-header text-center mb-4">
        <h2 className="h1">
          <span className="underline">Herramientas</span>
        </h2>
        <br />
        <p className="text-justify text-center">
          Estas son algunas herramientas y recursos que te ayudarán a prepararte
          para iniciar en LACChain EOSIO.
        </p>
      </div>
      <div class="container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="/docs/eosio"
              img="images/docse-01.svg"
              title="Documentación"
              body="Una lista de recursos para aprender de expertos de la industria de blockchain."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://lacchain.eosio.online"
              img="images/latamlink_Monitor_1014.svg"
              title="Servicio de monitoreo"
              body="Un servicio de monitoreo que permite la trazabilidad de la actividad en la red."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://developers.eos.io/manuals/eos/latest/cleos/index"
              img="images/latamlink_Laptop_187.svg"
              title="Cleos"
              body="Cleos es la interfaz de comando desarrollada por la empresa block.one"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://github.com/eoscostarica/eosio-network-bootstrap"
              img="images/latamlink_Wrench_1004034.svg"
              title="Ambiente local"
              body="Un ambiente local para desarrollar aplicaciones descentralizadas basadas en EOSIO."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://t.me/latamlink"
              img="images/latamlink_balloon-1.svg"
              title="Comunidad de Telegram"
              body="Contamos con un grupo de Telegram para coordinar esfuerzos y compartir información relevante al ecosistema de EOS regional."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://github.com/latamlink"
              img="images/Github-VerGreen-SVG-Hermes-22-04-20.svg"
              title="GitHub"
              body="LatamLink tiene un perfil de github que reune a todos los participantes de la iniciativa."
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

const HomePage = () => {  
    return (
        <div>
          <link rel="canonical" href="https://es.latamlink.io/" />
          <Layout>
            <HeroSection/>
            <AboutSection/>
            <br />
            <hr />
            <InformationSection/>
            <WhyChoose/>
            <BannerSection/>
            <ToolsSection/>
          </Layout>
        </div>
    );
  };
  
  export default HomePage;
  