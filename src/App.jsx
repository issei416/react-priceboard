import "./App.css";
import Pricecard from "./components/Pricecard.jsx";

function App() {
  const card1 = {
    type: "FREE",
    price: "0",
    list: {
      1: { feature: "Single User", isIncluded: true },
      2: { feature: "5GB Storage (Cloud)", isIncluded: true },
      3: { feature: "Unlimited Public Projects", isIncluded: true },
      4: { feature: "Community Access", isIncluded: true },
      5: { feature: "Unlimited Private Projects", isIncluded: false },
      6: { feature: "Dedicated Phone Support", isIncluded: false },
      7: { feature: "Free Subdomain", isIncluded: false },
      8: { feature: "Monthly Status Reports", isIncluded: false },
    },
  };
  const card2 = {
    type: "PLUS",
    price: "9",
    list: {
      1: { feature: "Single User", isIncluded: true },
      2: { feature: "5GB Storage (Cloud)", isIncluded: true },
      3: { feature: "Unlimited Public Projects", isIncluded: true },
      4: { feature: "Community Access", isIncluded: true },
      5: { feature: "Unlimited Private Projects", isIncluded: true },
      6: { feature: "Dedicated Phone Support", isIncluded: true },
      7: { feature: "Free Subdomain", isIncluded: true },
      8: { feature: "Monthly Status Reports", isIncluded: false },
    },
  };
  const card3 = {
    type: "PRO",
    price: "49",
    list: {
      1: { feature: "Single User", isIncluded: true },
      2: { feature: "5GB Storage (Cloud)", isIncluded: true },
      3: { feature: "Unlimited Public Projects", isIncluded: true },
      4: { feature: "Community Access", isIncluded: true },
      5: { feature: "Unlimited Private Projects", isIncluded: true },
      6: { feature: "Dedicated Phone Support", isIncluded: true },
      7: { feature: "Free Subdomain", isIncluded: true },
      8: { feature: "Monthly Status Reports", isIncluded: true },
    },
  };
  return (
    <>
      <div className="price-display">
        <Pricecard
          cardtype={card1.type}
          price={card1.price}
          list={card1.list}
        />
        <Pricecard
          cardtype={card2.type}
          price={card2.price}
          list={card2.list}
        />
        <Pricecard
          cardtype={card3.type}
          price={card3.price}
          list={card3.list}
        />
      </div>
    </>
  );
}

export default App;
