import { useEffect, useState } from 'react';

import { API } from '../../../shared/api/index.ts';
import { IRocket } from '../../../shared/api/types.ts';

function RocketsTable() {
  const [rockets, setRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    API.getRockets()
      .then((data) => {
        setRockets(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Rocket Name</th>
          <th>Mass (kg)</th>
          <th>Diameter (m)</th>
        </tr>
      </thead>
      <tbody>
        {rockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.rocket_name}</td>
            <td>{rocket.mass.kg}</td>
            <td>{rocket.diameter.meters}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RocketsTable;
