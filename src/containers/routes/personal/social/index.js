import React, {Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { InputLabel, Slide, Typography } from "@material-ui/core";
// core components
import GridItem from "../../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../../components/Grid/GridContainer.jsx";
import CustomInput from "../../../../components/CustomInput/CustomInput.jsx";
import Button from "../../../../components/CustomButtons/Button.jsx";
import Card from "../../../../components/Card/Card.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";
import CardAvatar from "../../../../components/Card/CardAvatar.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
import CardFooter from "../../../../components/Card/CardFooter.jsx";
import ModalSolicitar from '../../../../components/modalSolicitar'

// import avatar from "../../../assets/img/faces/marc.jpg";

const pruebaData = [
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/17cfc7e6dfc99e6408d304e947622030/5CDAAC13/t51.2885-19/s150x150/49811125_624820821284760_9195064285363961856_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Bromas, social",
    nombre: "Adolfo Lora",
    seguidoresYoutube:"1,196,000",
    alcanceVideo:"385,630",
    seguidoresInstagram:"119,000",
    alcancePost:"40,000"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/44990db2d308156e677e67ecfd8c9fa4/5CE207DF/t51.2885-19/s150x150/45381703_1643759115922625_8676966366177132544_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Bromas, social",
    nombre: "Carlos Durán",
    seguidoresYoutube:"2,867,639",
    alcanceVideo:"432,400",
    seguidoresInstagram:"542,000",
    alcancePost:"277,650"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/918c695ecead127e498ae10fad74fbb7/5CF54233/t51.2885-19/s150x150/29740730_1562428923874884_1351854416843505664_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Noticias, presentadora",
    nombre: "Cheddy Garcia",
    seguidoresYoutube:"16,061",
    alcanceVideo:"1,253",
    seguidoresInstagram:"2,000,000",
    alcancePost:"225,000"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/c327f94f21e9987cbaa78f4f5cc8022b/5CF1EEEF/t51.2885-19/s150x150/44577975_256546555049255_8765341649074126848_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Comedia, presentador",
    nombre: "Liondy Ozoria",
    seguidoresYoutube:"3,007",
    alcanceVideo:"3,625",
    seguidoresInstagram:"1,300,000",
    alcancePost:"89,465"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/eae9751c7ae762dbb03db004184a5051/5CFCC445/t51.2885-19/s150x150/44297763_305597446930165_3428564270890090496_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Juventud, cocina",
    nombre: "Nikol Morillo ",
    seguidoresYoutube:"0",
    alcanceVideo:"0",
    seguidoresInstagram:"8,529",
    alcancePost:"2,105"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/0a7ae787178a67cfa413b540cc8ec8a1/5CED23B0/t51.2885-19/s150x150/47034018_310385589582138_2190796172682067968_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Juventud, experimentos",
    nombre: "Ducktape",
    seguidoresYoutube:"228,000",
    alcanceVideo:"202, 320",
    seguidoresInstagram:"101,000",
    alcancePost:"51, 321"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/c9f971c5d5cdc24da5119d14532cfb31/5CF0BA37/t51.2885-19/s150x150/49698591_2226536634065261_6408179222396796928_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Juventud, superación",
    nombre: "Leidyn Bernardez",
    seguidoresYoutube:"0",
    alcanceVideo:"0",
    seguidoresInstagram:"75, 900",
    alcancePost:"37, 500"
  },
  {
    foto:"https://scontent-mia3-2.cdninstagram.com/vp/9a7ebb58ec7578f9d555996502e93538/5CDB15AB/t51.2885-19/s150x150/51276129_543124359500647_3046431195089862656_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com",
    contenido: "Juventud",
    nombre: "Juan Luis Minaya",
    seguidoresYoutube:"4, 900",
    alcanceVideo:"14, 700",
    seguidoresInstagram:"45, 400",
    alcancePost:"35, 300"
  },
]



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cardHeader: {
    backgroundColor: "#3f51b5"
  },
  button: {
    backgroundColor: "#3f51b5"
  },
  cardTitle: {

  },
  description: {
    textAlign: "center"
  }
};

const InfluencersCards = (props) =>
{
  const {data, classes, openSolicitar} = props;
  return data.map((v, i) => {
    return <GridItem xs={12} sm={12} md={3}>
    <Card profile>
      <CardAvatar profile>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={v.foto} alt="..." />
        </a>
      </CardAvatar>
      <CardBody profile>
        {/* <h4 className={classes.cardTitle}>{v.nombre}</h4> */}
        <Typography variant="h5">{v.nombre}</Typography>
        <Typography variant="inherit">{v.contenido}</Typography>        
        <Button color="danger" round onClick={() => openSolicitar(v)} >
          Solicitar
      </Button>
      </CardBody>
    </Card>
  </GridItem>
  })
} 

class UserProfile extends Component {
  
  state =
  {
    modal: false, influencer: {}
  }

  openModal = (influencer) =>
  {
    this.setState({modal: true, influencer})
  }
  closeModal = () =>
  {
    this.setState({modal: false})
  }
  
  render()
  {
    const { classes } = this.props;
    const {modal, influencer} = this.state;
    return (
      <Slide in>
        <div>
          <br/>
          <GridContainer>
            <InfluencersCards classes={classes} data={pruebaData} openSolicitar={this.openModal} />                  
  
          </GridContainer>
          <ModalSolicitar influencer={influencer} open={modal} handleModal={this.closeModal} />
        </div>
      </Slide>
    );

  }

}

export default withStyles(styles)(UserProfile);
