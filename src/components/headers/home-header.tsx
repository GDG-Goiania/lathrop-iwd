/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import configValues from "helpers/config";
import { changeTimeZone, calcDateDistance } from "helpers/date";
import styles from "styles/Home.module.css";

const DATE_DISTANCE_LABELS: Record<string, string> = {
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
};

const HomeHeader: React.FC = ({}) => {
  const { width, height, isMobile, isTablet, isDesktop } =
    useWindowDimensions();

  useEffect(() => {}, [width, height, isMobile, isTablet, isDesktop]);

  const [_dateDistance, _setDateDistance] = useState({
    distance: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  } as Record<string, number>);

  useEffect(() => {
    const _interval = setInterval(function () {
      const _result = calcDateDistance(
        changeTimeZone(configValues.eventDate, "America/Sao_Paulo")
      );

      if (_result.distance < 0) {
        clearInterval(_interval);
        return;
      }

      _setDateDistance(_result);
    }, 1000);

    return () => {
      clearInterval(_interval);
    };
  }, []);

  return (
    <header>
      <section className={styles.HeaderContainer}>
        <img
          alt="banner"
          className={styles.HeaderBanner}
          src={
            isDesktop
              ? "/iwdHero.png"
              : isTablet
              ? "/iwdHero.png"
              : "/iwdHero.png"
          }
        />
        <Row>
          <Col className={styles.RegisterContainer}>
            <a
              className={styles.RegisterButton}
              href={configValues.eventLinkRegistrationUrl}
            >
              Inscreva-se
            </a>
          </Col>
        </Row>
      </section>

      <section className={styles.Counter}>
        <ul className={styles.CounterList}>
          {Object.keys(DATE_DISTANCE_LABELS).map((key) => (
            <li className={styles.CounterListItem} key={key}>
              <span className={styles.CounterListItem__time}>
                {_dateDistance[key]}
              </span>
              {DATE_DISTANCE_LABELS[key]}
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

export default HomeHeader;
