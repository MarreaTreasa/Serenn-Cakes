import Black from "./images/BLACK FOREST.png";
import Caramel from "./images/CARAMEL.png";
import Dates from "./images/datesnnuts.png";
import Pie from "./images/PIE.jpg";
import cupcake from "./images/cuppies.png";
import './Carouselx.css';

const Data=[
    {
        id:1,
        image:Dates,
        title:"Fruit n Nuts",
        description:"Rich taste of Cashews and dried fruits in a perfect combination",
        Price:900,
        className:"dates"
    },
    {
        id:2,
        image:Black,
        title:"Black Forest",
        description:"Savor layers of rich chocolate, whipped cream, and cherries in this heavenly Black Forest cake",
        Price:1000,
        className: "forest"
    },
    {
        id:3,
        image:Caramel,
        title:"Caramel",
        description:"Delight in moist layers of cake drenched in luscious caramel and topped with velvety caramel frosting.",
        Price:900,
        className: "caramel"
    },
    {
        id:4,
        image:Pie,
        title:"Pie",
        description:"Enjoy a classic pie with a flaky crust and a luscious, fruit-filled center.",
        Price:1000,
        className:"pie"
    },
    {
        id:5,
        image:cupcake,
        title:"Muffins",
        description:"Indulge in moist, fluffy muffins with a creamy, rich center and a hint of vanilla.",
        Price:500,
        className: "cupcake"
    }
]

export default Data;