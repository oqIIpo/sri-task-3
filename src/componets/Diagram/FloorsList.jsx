import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import RoomsList from "./RoomsList";

const ROOMS_QUERY = gql`
  query {
    rooms {
      id
      title
      capacity
      floor
    }
  }
`;

const FloorItem = ({ floor, rooms }) => {
  return (
    <li className="floors__item floor">
      <div className="floor__heading-container diagram-grid">
        <div className="floor__heading full-width-row">
          <div className="floor__label">{`${floor} этаж`}</div>
        </div>
      </div>
      <RoomsList rooms={rooms} />
    </li>
  );
};

class FloorsList extends Component {
  render() {
    const { rooms: { rooms, loading, error } } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }
    const floors = rooms.reduce((acc, { floor }) => {
      if (acc.indexOf(floor) === -1) return acc.concat(floor);
      return acc;
    }, []);
    return (
      <div className="diagram__floors floors">
        <ul className="floors__list">
          {floors.map(floor => {
            const floorRooms = rooms.filter(room => room.floor == floor);
            return <FloorItem key={floor} floor={floor} rooms={floorRooms} />;
          })}
        </ul>
      </div>
    );
  }
}

FloorsList = graphql(ROOMS_QUERY, { name: "rooms" })(FloorsList);

export default FloorsList;