import React, { Fragment } from "react";
import PropTypes from "prop-types";

import CloseIcon from "../common/icons/CloseIcon";
import Executioner from "../common/Executioner";
import Header from "../Header";

const LayoutCommon = props => {
  const {
    title,
    titleInput,
    dateInput,
    dateStartInput,
    dateEndInput,
    participantsInput,
    participantsList,
    meetingRoomsList,
    editPageDeleteSection,
    onCloseClick,
    specialStyle
  } = props;
  return (
    <Fragment>
      <Header />
      <div className="form-container__row-1">
        <div className="form-centering-container">
          <div className="fields-wrapper">
            <header className="form-header">
              <h1 className="form-header__heading">{title}</h1>
              <div className="form-header__close" onClick={onCloseClick}>
                <CloseIcon className="form-header__close-icon" />
              </div>
            </header>
          </div>
          <div className="fields-wrapper">
            <div className="form__row row-1">
              <div className="form__column">
                <div className="form__field">
                  <Executioner>{titleInput}</Executioner>
                </div>
              </div>
              <div className="form__column">
                <div className="form__field">
                  <div className="form-column-left">
                    <div className="column-left__left">
                      <Executioner>{dateInput}</Executioner>
                    </div>
                    <div className="column-left__right">
                      <div className="form__date-range">
                        <Executioner>{dateStartInput}</Executioner>
                        <div className="form_date-range-dash">—</div>
                        <Executioner>{dateEndInput}</Executioner>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="delimiter" />
          <div className="form__row row-2" style={specialStyle}>
            <div className="form__column">
              <div className="fields-wrapper">
                <div className="form__field">
                  <Executioner>{participantsInput}</Executioner>
                </div>
                <div className="participants">
                  <ul className="participants__list">
                    <Executioner>{participantsList}</Executioner>
                  </ul>
                </div>
              </div>
              <div className="delimiter" />
            </div>
            <div className="form__column">
              <div className="fields-wrapper">
                <div className="form__field">
                  <Executioner>{meetingRoomsList}</Executioner>
                </div>
              </div>
            </div>
          </div>
          <div className="delimiter" />
          {editPageDeleteSection ? (
            <Executioner>{editPageDeleteSection}</Executioner>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

LayoutCommon.propTypes = {
  title: PropTypes.string.isRequired,
  titleInput: PropTypes.func.isRequired,
  dateInput: PropTypes.func.isRequired,
  dateStartInput: PropTypes.func.isRequired,
  dateEndInput: PropTypes.func.isRequired,
  participantsInput: PropTypes.func.isRequired,
  participantsList: PropTypes.func.isRequired,
  meetingRoomsList: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired
};

export default LayoutCommon;
