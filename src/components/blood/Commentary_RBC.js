import React from "react";
import Commentary_base from "./Commentary_base";

class Commentary_RBC extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Commentary_base title="Red blood cells" alert="Normal">

        <h3 className="alert">
          Your red blood cells count is within the normal range
        </h3>
        <ul>
          <li>
            White blood cells are the cells of the immune system that are
            involved in protecting the body against both infectious disease and
            foreign invaders.
          </li>
        </ul>
        <h3 className="alert">Implications of high white blood cells</h3>
        <ul className="explaination">
          <li>
            An increased production of white blood cells to fight an infection
          </li>
          <li>
            A reaction to a drug that increases white blood cell production
          </li>
          <li>
            A disease of bone marrow, causing abnormally high production of
            white blood cells
          </li>
          <li>
            An immune system disorder that increases white blood cell production
          </li>
        </ul>
      </Commentary_base>
    );
  }
}

export default Commentary_RBC;
