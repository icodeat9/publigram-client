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

  }
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
        <Button color="danger" round onClick={openSolicitar} >
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
    modal: false
  }

  openModal = () =>
  {
    this.setState({modal: true})
  }
  closeModal = () =>
  {
    this.setState({modal: false})
  }
  
  render()
  {
    const { classes } = this.props;
    const {modal} = this.state;
    return (
      <Slide in>
        <div>
          <br/>
          <GridContainer>
            <InfluencersCards classes={classes} data={pruebaData} openSolicitar={this.openModal} />                  
  
          </GridContainer>
          <ModalSolicitar open={modal} handleModal={this.closeModal} />
        </div>
      </Slide>
    );

  }

}

export default withStyles(styles)(UserProfile);
