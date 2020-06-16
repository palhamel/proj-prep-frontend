import React from "react";

import { NewsWho } from "../components/NewsWho";
import { CovidStats } from "../components/CovidStats";

export const WhoInfo = () => {
  return (
    <div>
      <h2>WHO Info</h2>
      <CovidStats />
      <NewsWho />
    </div>
  );
};
