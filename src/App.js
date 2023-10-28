import { useState } from "react";
import CoffeHousePage from "./components/pages/CoffeHouse";
import OurCoffeePage from "./components/pages/OurCoffee";
import YourPleasurePage from "./components/pages/YourPleasure";

function App() {
  const [openedPage, setOpenedPage] = useState("Coffee house");

  const setPage = (pageName) => {
    setOpenedPage(pageName);
  };

  const visibleContent = () => {
    if (openedPage === "Coffee house") {
      return <CoffeHousePage setPage={setPage} />;
    }
    return openedPage === "Our coffee" ? (
      <OurCoffeePage setPage={setPage} />
    ) : (
      <YourPleasurePage setPage={setPage} />
    );
  };

  return visibleContent();
}

export default App;
