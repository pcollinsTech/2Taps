import React from "react"
import { Modal } from "react-bootstrap"
import { FaFacebook, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa"
import { MdBookmark } from "react-icons/md"
import ReservationContext from "../context/ReservationContext"
import { Link } from "gatsby"
import SpecialsItem from "./SpecialsItem"

const lunchSpecials = [
    {
      title: "1 .Aceitunas Mixtas",
      description:
        "Mixed Olives - Ask server for details",
    },
    {
      title: "3A. Pan Fresco",
      description:
        "Selection of bread served with fresh pesto, black olive tapenade, smoked sundried tomato tapenade, olive oil & balsamic vinegar",
    },

    {
            title:"4.Empanada de Carne",
        description:"Chilli beef wrapped in puff pastry topped with spicy tomato sauce & melted cheddar",
    },
    {
        title:"5.Las Alitas de Pollo (GF)",
        description:"Marinated chicken wings glazed in honey OR Marinated chicken wings in piri piri sauce",
    },
    {
        title:"6.Chorizo al Vino (GF)",
        description:"Fried spicy chorizo sausage finished with red wine",
    },
    {
        title:"7.Estofado de Cordero (GF)",
        description:"Moroccan lamb tagine",
    },
    {
        title:"8. Queso de Cabra con Jamon Serrano y Higos (GF)",
        description:"Goats cheese wrapped in serrano ham served with rocket, balsamic vinegar & fig relish",
    },
    {
        title:"11. Albóndigas Picantes",
        description:"Spicy pork meatballs with a tomato sauce & flaked almonds",
    },
    {
        title:"12. Brocheta de Pollo (GF)",
        description:"Seasoned chicken skewer on a bed of rocket with aioli",
    },
    {
        title:"13A. Budin Negro Frito",
        description:"Pan fried black pudding, shallots & apple cuts",
    },
    {
        title:"13B. Paté de hígado de pollo ",
        description:"Potted chicken liver pate served with toasted brioche, onion & pear chutney",
    },
    {
        title:"14A. Langostinos",
        description:"Scampi in a light crispy batter served with homemade tartar sauce",
    },

    {
        title:"14B. Boquerones Fritos",
        description:"Whitebait in a light batter served with cayenne, smoked paprike & lime mayonnaise",
    },
    {
        title:"14C. Cóctel de gambas",
        description:"Prawn cocktail, marie rose & lettuce served with wheaten bread",
    },
    {
        title:"17. Gambas al Ajillo (GF)",
        description:"Tiger prawns served in garlic & chilli oil",
    },
    {
        title:"18. Calamares",
        description:"Salted squid rings served with cayenne, smoked paprike & lime mayonnaise",
    },
    {
        title:"19. Pesca del día sartén con verduras de temporada (GF)",
        description:"Catch of the day cooked in parsley & garlic butter served with crunchy greens",
    },

    {
        title:"21. Bunuelos de queso de cabra",
        description:"Goats cheese fritters served with a rocket & beetroot salad",
    },
    {
        title:"22. Patatas Bravas (GF) (V)",
        description:"Crispy fried pototas topped with spicy tomato sauce & avocado aioli",
    },
    {
        title:"23. Tortilla Española (GF)",
        description:"Spanish omelette with red pepper, onion & potato",
    },
    {
        title:"24. Pan frito crujientes verdes",
        description:"Pan fried crunchy greens, garlic shallots served with hummus dip",
    },
    {
        title:"25. Empanada Vegetariana",
        description:"Sweet potato, goats cheese and caramelised red onion wrapped in filo pastry with tahini yoghurt",
    },
    {
        title:"26. Champignons con Pesto y Brie Fundido",
        description:"Large flat cup mushrooms served with fresh pesto & melted brie",
    },
    {
        title:"27. Patatas fritas con salsa de ajo (GF)",
        description:"Cajun spiced chips served with sweet chilli & sour cream dip",
    },
    {
        title:"28. Patatas Asadas con Romero (GF)",
        description:"Roasted new potatoes with garlic, rosemary and sea salt",
    },
    {
        title:"29. Halloumi y mermelada de chile en brioche",
        description:"Grilled halloumi, chilli jam on brioche toast",
    },
    {
        title:"30. Ensalada Vasca (GF)",
        description:"Salad with goats cheese, avocado, olives, tomato, red onion & balsamic vinegar",
    },
    {
        title:"31. Ensalada Mixta (GF)(V)",
        description:"Mixed leaf salad with red onion, avocado & sundried tomato",
    },
    {
        title:"32. Classic Russian Salad",
    },
    {
        title:"33. De jamon serrano con melon (GF)",
        description:"Serrano ham salad with rocket, galia melon, faked almonds and balsamic vinegar",
    },
       
  ];

const SpecialsMenu = ({ specialsOpen }) => {
  return (
    <ReservationContext.Consumer>
      {toggler => (
        <>
            <div onClick={() => toggler.specialsReservationTab()} className="lunch_special">
                <h3 className="text-center">
                    Let’s Do Lunch <br/> <br/>
                    3 Tapas and <br/>a sip for £15 
                </h3>
            </div>  
          <Modal
            show={toggler.specialsOpen}
            onHide={() => toggler.specialsReservationTab()}
            className="right"
          >
            <Modal.Header closeButton />
            <Modal.Body className="text-center">
                <h3>
                    Let’s Do Lunch 
                </h3>
                <p>
                    3 Tapas and a sip for £15 
                </p>
                <p>
                    Drinks Included – 
                </p>
                <p>
                    Soft drinks, Coke cola, diet Coke, Coke zero, Fanta orange, Fanta lemon, Sprite, still OR sparking water.
                </p>
                <p>
                    Bottle beer – Sol or Birra morretti 
                </p>
                <p>
                    Glass of wine – Protocolo blanco, Protocolo tinto, red OR white wine sangria.
                </p>
                {
                    lunchSpecials.map((item) => (
                    <SpecialsItem 
                        title={item.title}
                        description={item.description}
                    />
                    ))
                }
            </Modal.Body>
          </Modal>
        </>
      )}
    </ReservationContext.Consumer>
  )
}
export default SpecialsMenu
