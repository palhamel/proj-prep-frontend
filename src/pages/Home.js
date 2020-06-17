import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

// Navigation:
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
// Pages:
import { Start } from "../pages/Start";
import { KitList } from "./KitList";
import { NewsList } from "./NewsList";
import { Prepping } from "./Prepping";
import { WhoInfo } from "./WhoInfo";
import { Smhi } from "./Smhi";

import { KitDetails } from "./KitDetail";

export const Home = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/kits" exact>
            <KitList />
          </Route>
          <Route path="/kit/:kitId" exact>
            <KitDetails />
          </Route>
          <Route path="/news" exact>
            <NewsList />
          </Route>
          <Route path="/prepping" exact>
            <Prepping />
          </Route>
          <Route path="/who" exact>
            <WhoInfo />
          </Route>
          <Route path="/smhi" exact>
            <Smhi />
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

// styled-components:
const AppContainer = styled.main`
  @media (min-width: 668px) {
  max-width: 900px;
  margin: 0px auto;
  }


  @media (min-width: 900px) {
  max-width: auto;
  margin: 0px auto;
  }
`;
