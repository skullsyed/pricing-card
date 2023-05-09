import logo from "./logo.svg";
import "./App.css";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Container,
  CardHeader,
} from "reactstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
// import PriceCard from "./component/PriceCard.component";
// import priceCardDetails from "./data";

function App() {
  const priceCardDetails = [
    {
      id: "1",
      category: "Free",
      price: "$0",
      validity: "month",
      accessUser: "Single User Access",
      storage: "5GB",
      Projects: "Unlimited Public Projects",
      accessStatus: "Community Access",
      privateProject: "unlimited private projects",
      phoneSupport: "Dedecate Phone Support",
      subDomain: "free sub domain",
      reports: "Monthly reports",
    },

    {
      id: "2",
      category: "Plus",
      price: "$9",
      validity: "month",
      accessUser: "5 User Access",
      storage: "50GB",
      Projects: "Unlimited Public Projects",
      accessStatus: "Community Access",
      privateProject: "unlimited private projects",
      phoneSupport: "Dedecate Phone Support",
      subDomain: "free sub domain",
      reports: "Monthly reports",
    },
    {
      id: "3",
      category: "Pro",
      price: "$49",
      validity: "month",
      accessUser: "Unlimited User Access",
      storage: "150GB",
      Projects: "Unlimited Public Projects",
      accessStatus: "Community Access",
      privateProject: "unlimited private projects",
      phoneSupport: "Dedecate Phone Support",
      subDomain: "Unlimited sub domain",
      reports: "Monthly reports",
    },
  ];

  return (
    <div className="App">
      <div className="cardContainer">
        {
          priceCardDetails.map((cd) => (
            <PriceCard
              category={cd.category}
              price={cd.price}
              validity={cd.validity}
              phoneSupport={cd.phoneSupport}
              subDomain={cd.subDomain}
              reports={cd.reports}
              accessUser={cd.accessUser}
              storage={cd.storage}
              Projects={cd.Projects}
              accessStatus={cd.accessStatus}
              privateProject={cd.privateProject}
              key={cd.id}
            />
          ))
          // console.log(cd);
        }
        {/* <PriceCard /> */}
      </div>
    </div>
  );
}

function PriceCard({
  category,
  price,
  validity,
  phoneSupport,
  subDomain,
  reports,
  accessUser,
  Projects,
  accessStatus,
  privateProject,
  storage,
}) {
  return (
    <div>
      <Container className="card-container">
        <Card
          body
          className="my-2 card-body"
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>
            <CardTitle tag="h6">{category}</CardTitle>
            <div className="cardTitle-price">
              <CardTitle tag="h1">{price}/</CardTitle>
              <CardTitle tag="h6">{validity}</CardTitle>
            </div>
          </CardHeader>
          <CardText>
            <AiOutlineCheck />
            {phoneSupport}
          </CardText>
          <CardText>
            <AiOutlineCheck />
            {subDomain}
          </CardText>
          <CardText>
            <AiOutlineCheck />
            {reports}
          </CardText>
          <CardText>
            <AiOutlineClose />
            {accessUser}
          </CardText>
          <CardText>
            <AiOutlineCheck />
            {storage}
          </CardText>
          <CardText>
            <AiOutlineCheck />
            {Projects}
          </CardText>
          <CardText>
            <AiOutlineClose />
            {accessStatus}
          </CardText>
          <CardText>
            <AiOutlineClose />
            {privateProject}
          </CardText>

          <Button color="primary">Add Product</Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
