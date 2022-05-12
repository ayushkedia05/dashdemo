import React, { useEffect, useState } from "react";
import { Table,Switch,Chip,MediaQuery} from "@mantine/core";
import { useMediaQuery } from "react-responsive";
import elements from "./../constants/constants.js";

const Tablecomponent = () => {




 

  const row = elements.map((element, ind) =>( <tr key={element.name}>
    <td>{element.RunType}</td>
    <td>{element.status}</td>
    <td>{element.Start}</td>
    <td>{element.end}</td>
    <td>{element.exposed}</td>
    <td>   <Chip
                value="chip"
                checked={false}
                styles={{
                  label: { color: element.chipcolor },
                  outline: { color: element.chipcolor },
                  filled: { color: element.chipcolor },
                  input: { color: element.chipcolor },
                  disabled: { color: element.chipcolor },
                }}
              >
                {element.risk}
              </Chip></td>
    <td><Switch></Switch></td>

  </tr> ));

  return (


<div className="table">

<Table >
      <thead>
        <tr>
          <th>Run Type</th>
          <th>Status</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Exposed</th>
          <th>Risk</th>
          <th></th>

        </tr>
      </thead>
      <tbody>{row}</tbody>
    </Table>

  </div>
  );
};

export default Tablecomponent;
