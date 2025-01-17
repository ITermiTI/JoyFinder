import React from "react";
import ListItem from "./ListItem";
import axios from "axios";
import * as Const from "../static/const";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import EventDetails from "./EventDetails";
import ButtonsStyle from "../styles/ButtonsStyle.css";
import EventDetailsStyle from "../styles/EventDetailsStyle.css";
import EditEventDetails from "./EditEventDetails";

import ButtonBase from "@material-ui/core/ButtonBase";

class EventGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      render: "list",
      creatorid: "",
      checkparticipation: null,
      members: [],
    };
  }

  handleClick(id, compName, creatorid) {
    this.setState({
      id: id,
      render: compName,
    });
    this.props.updateState("showButtons", false);
    ///api/members/checkIfUserParticipate/userid/eventid
    axios
      .get(
        `${Const.API_URL}api/members/checkIfUserParticipate/${sessionStorage.loggedID}/${id}`
      )
      .then((res) => {
        if (parseInt(creatorid) == parseInt(sessionStorage.loggedID)) {
          this.setState({
            checkparticipation: 1,
          });
        }
        if (parseInt(creatorid) != parseInt(sessionStorage.loggedID)) {
          if (res.data == true) {
            this.setState({
              checkparticipation: 0,
            });
          }
          if (res.data == false) {
            this.setState({
              checkparticipation: 2,
            });
          }
        }
      });
  }

  handleClickNavigate(compName) {
    this.setState({ render: compName });
    if (compName == "list") this.props.updateState("showButtons", true);
  }

  handleDeleteEvent() {
    axios
      .delete(`${Const.API_URL}api/events/delete/${this.props.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  handleTakePart() {
    axios
      .post(`${Const.API_URL}api/members`, {
        eventId: this.state.id,
        userId: sessionStorage.loggedID,
      })
      .then((res) => {
        console.log(res.data);
      });

    this.setState({ render: "list" });
  }

  handleLeave() {
    axios
      .delete(
        `${Const.API_URL}api/members/byParticipation/${sessionStorage.loggedID}/${this.state.id}`
      )
      .then((res) => {
        this.setState({ render: "list" });
      });
  }

  render() {
    if (this.state.render == "list")
      return (
        <div className="component-background-events">
          <div
            className="root"
            style={{
              width: "auto",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              overFlow: "hidden",
            }}
          >
            <GridList
              cellHeight={200}
              cols={4}
              style={{ width: 1000, height: 450 }}
            >
              {this.props.data.events &&
                this.props.data.events.map((tile) => (
                  <GridListTile key={tile.id}>
                    <ButtonBase
                      onClick={this.handleClick.bind(
                        this,
                        tile.id,
                        "details",
                        tile.usersByCreatorid.id
                      )}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                        alt="complex"
                        src="https://kom.krakow.pl/wp-content/uploads/2019/04/9140351-pilka-nozna-900-554.jpg"
                      />
                    </ButtonBase>
                    <GridListTileBar
                      title={tile.name}
                      subtitle={tile.date + "   " + tile.time}
                      titlePosition="bottom"
                    />
                  </GridListTile>
                ))}
            </GridList>
          </div>
        </div>
      );

    console.log(this.state.checkparticipation);
    if (this.state.render == "details" && this.state.checkparticipation == 1)
      return (
        <div>
          <EventDetails id={this.state.id} />
          <button
            className="back-button-e"
            onClick={this.handleClickNavigate.bind(this, "list")}
          >
            Back
          </button>
          <button
            className="edit-details-button-e"
            onClick={this.handleClickNavigate.bind(this, "editDetails")}
          >
            Edit
          </button>
          <button
            className="cancel-button-e"
            onClick={this.handleDeleteEvent.bind(this)}
          >
            Cancel
          </button>
        </div>
      );
    if (this.state.render == "details" && this.state.checkparticipation == 0)
      return (
        <div>
          <EventDetails id={this.state.id} />
          <button
            className="back-button-e"
            onClick={this.handleClickNavigate.bind(this, "list")}
          >
            Back
          </button>
          <button
            className="edit-details-button-e"
            onClick={this.handleLeave.bind(this)}
          >
            Leave event
          </button>
        </div>
      );
    if (this.state.render == "details" && this.state.checkparticipation == 2)
      return (
        <div>
          <EventDetails id={this.state.id} />
          {console.log(this.state.id)}
          <button
            className="back-button-e"
            onClick={this.handleClickNavigate.bind(this, "list")}
          >
            Back
          </button>
          <button
            className="edit-details-button-e"
            onClick={this.handleTakePart.bind(this)}
          >
            Take part
          </button>
        </div>
      );
    if (this.state.render == "editDetails")
      return (
        <div>
          <button
            className="back-button-edit"
            onClick={this.handleClickNavigate.bind(this, "details")}
          >
            Back
          </button>
          <EditEventDetails id={this.state.id} />
        </div>
      );
    if (this.state.render == "details" && this.state.checkparticipation == null)
      return <div></div>;
  }
}
export default EventGridList;
