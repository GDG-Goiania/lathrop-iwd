import { Speaker } from "models/speaker";
import Image from "next/image";
import React, { useState } from "react";
import { Badge, Col, Row } from "reactstrap";

import styles from "../../styles/Schedule.module.css";
import _speakers from "../../hooks/useSpeakers";
import ScheduleTime from "./schedule-time";

const speakers: Array<Speaker> = _speakers;

interface ScheduleCardProps extends Speaker {
  lgValue: number;
  room?: string;
  speakers?: {
    topic?: string;
    speaker_id?: number;
    start: string;
    end: string;
  }[];
}

const pathHtml = (name: string, path: string, pathStyle: string) => {
  return (
    <div className={`${styles.path_div} ${pathStyle}`}>
      {/*<Image
            unoptimized
            className={styles.card_path_icon}
            src={path}
            height="15px"
            width="15px"
        />*/}
      <span>{name}</span>
    </div>
  );
};
const renderPath = (path?: string) => {
  switch (path) {
    case "Arara Canindé":
      return pathHtml(
        "Arara Canindé",
        `/${path}.png`,
        styles.path_canastra_color
      );
    case "Araracanga":
      return pathHtml("Araracanga", `/${path}.png`, styles.path_minas_color);
    case "Arara Azul Grande":
      return pathHtml(
        "Arara Azul Grande",
        `/ararauna.png`,
        styles.path_ararauna_color
      );
    default:
      return pathHtml("Maracanã", `/${path}.png`, styles.path_curado_color);
  }
};

const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {
  const getPillColor = (tech: string) => {
    switch (tech) {
      case "Carreira":
        return "primary";
      case "Machine Learning":
        return "secondary";
      case "Web":
        return "danger";
      case "UI/UX":
        return "info";
      case "Infra/Devops":
        return "warning";
      default:
        return "success";
    }
  };

  const getBoderColor = (tech: string) => {
    switch (tech) {
      case "Arara Canindé":
        return "#46B3DC";
      case "Araracanga":
        return "#09CCB1";
      case "Araraúna":
        return "cornflowerblue";
      case "Maracanã":
        return "#3392F9";
      default:
        return "#FFFFFF";
    }
  };
  return (
    <>
      {props.speakers && (
        <Col xxl={props.lgValue} sm={12} className={styles.card_text}>
          <Row className={styles.card_content}>
            <div className={styles.path_wrapper} style={{}}>
              {props.room && renderPath(props.room)}
            </div>

            {props.speakers.map((spk, index) => {
              const speak = speakers.find((obj) => obj.id === spk.speaker_id);
              // console.log("speaker: " + JSON.stringify(speak));
              return (
                <React.Fragment key={index}>
                  <Row className={styles.card_title}>
                    {/*<div>
                                                <span className={styles.margin_right_15}>{spk.topic}</span>
                                            </div>*/}
                  </Row>
                  <Row className={styles.card_time} style={{}}>
                    <div>
                      <span>{spk.start}</span>
                      <span className={`${styles.timeSeparator}`}>-</span>
                      <span className={styles.opacity50}>{spk.end}</span>
                    </div>
                  </Row>

                  {speak ? (
                    <p style={{ marginTop: "5px", fontSize: "16px" }}>
                      {speak.topic}
                    </p>
                  ) : (
                    <></>
                  )}
                  {speak && speak.photo && (
                    <Row className={styles.display_inline_block}>
                      <div className={styles.div_wrapper}>
                        <Image
                          unoptimized
                          className={styles.card_image}
                          src={speak.photo}
                          alt={`Foto ${speak.name}`}
                          height="40"
                          width="40"
                        />
                        <div className={styles.card_speaker_info_content}>
                          <p>{speak.name}</p>

                          {speak.community && (
                            <p className={styles.gde}>{speak.community}</p>
                          )}
                          <p
                            className={styles.font_size_14}
                          >{`${speak.companyTitle}`}</p>
                        </div>
                      </div>
                    </Row>
                  )}
                  {props.speakers && props.speakers.length > 1 && index == 0 ? (
                    <hr style={{ width: "100%", margin: "10px 0px" }}></hr>
                  ) : (
                    <></>
                  )}
                </React.Fragment>
              );
            })}
          </Row>
        </Col>
      )}
      {!props.speakers && (
        <Col xxl={props.lgValue} sm={12} className={styles.card_text}>
          <Row className={styles.card_content}>
            <div className={styles.path_wrapper}>
              {props.path && renderPath(props.path)}
            </div>
            <Row className={styles.card_title}>
              <div>
                <span className={styles.margin_right_15}>{props.topic}</span>
              </div>
            </Row>
            {props.photo && (
              <Row className={styles.display_inline_block}>
                <div className={styles.div_wrapper}>
                  <Image
                    unoptimized
                    className={styles.card_image}
                    src={props.photo}
                    alt={`Foto ${props.name}`}
                    height="40"
                    width="40"
                  />
                  <div className={styles.card_speaker_info_content}>
                    <h5>{props.name}</h5>

                    {props.community && (
                      <p className={styles.gde}>{props.community}</p>
                    )}
                    <p
                      className={styles.font_size_14}
                    >{`${props.companyTitle}`}</p>
                  </div>
                </div>
              </Row>
            )}
          </Row>
        </Col>
      )}
    </>
  );
};

export default ScheduleCard;
