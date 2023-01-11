/*eslint-disable*/
import React, { useState } from "react";
import {
    Col,
    Container,
    Row,
} from "reactstrap";

import Image from 'next/image';
import styles from 'styles/OlderEvents.module.css';

const OlderEvenstsSection: React.FC = ({ }) => {

    return (
        <>
            <Container id="about">
                <Row>
                    <Col lg={6} sm={12}>
                        <h1> O que é o IWD? </h1>

                        <p className={styles.Description}>
                            O IWD é um evento anual realizado pelos WTMs de todo o mundo com o objetivo de celebrar as conquistas das mulheres em tecnologia. A grade deste evento não aborda apenas tecnologias Google, mas toda e qualquer pauta de interesse da comunidade para essa celebração.
                        </p>
                    </Col>
                    <Col lg={6} sm={12}>
                        {/*<div className={styles.VideoContainer}><iframe src='https://www.youtube.com/embed/8VbKty9jtdM' allowFullScreen></iframe></div>*/}
                        <div className={styles.VideoContainer}> <img src='fotoEncontroWtm.jpeg' width="635px"/></div>
                    </Col>
                </Row>

            </Container>

            <div className={styles.MarqueeOuter}>
                <div className={styles.MarqueeInner}>
                    <div className={styles.ConstructItems}>
                        <div className={styles.ConstructItem}>Ouse ser Feliz !</div>
                        <div className={styles.ConstructItem}>Ouse ser Única !</div>
                        <div className={styles.ConstructItem}>Ouse ser Diferente !</div>
                        <div className={styles.ConstructItem}>Ouse ser Você mesma !</div>
                        <div className={styles.ConstructItem}>Ouse ser Sonhadora !</div>
                        <div className={styles.ConstructItem}>Ouse ser A primeira !</div>
                        <div className={styles.ConstructItem}>Ouse ser Otimista !</div>
                        <div className={styles.ConstructItem}>Ouse ser Destemida !</div>
                        <div className={styles.ConstructItem}>Ouse ser Feliz !</div>
                        <div className={styles.ConstructItem}>Ouse ser Única !</div>
                        <div className={styles.ConstructItem}>Ouse ser Diferente !</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OlderEvenstsSection;

