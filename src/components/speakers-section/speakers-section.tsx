/*eslint-disable*/
import { Speaker } from "models/speaker";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button,
} from "reactstrap";
import speakers from '../../hooks/useSpeakers';
import useWindowDimensions from '../../hooks/useWindowDimensions';


import styles from '../../styles/Speakers.module.css'
import SpeakerCard from "./speaker-card";

const SpeakersSection: React.FC = ({ }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSSR, setIsSSR] = useState(true);
  const { width } = useWindowDimensions();
  const keyNumber = activeIndex + 1;

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const speakersChunk = (array: Array<Speaker>, size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size,),
    )
  };


  let _chunckSize = 5;
  if (!isSSR && width != null && width < 1076) _chunckSize = 1;
  const _speakersChuncked = speakersChunk(speakers, _chunckSize);

  const next = () => {
    const nextIndex = activeIndex === _speakersChuncked.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? _speakersChuncked.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
  };


  const displaySpeakers = _speakersChuncked.map((speakersList: Array<Speaker>, index: number) => {

    return (
      <CarouselItem
        key={`${index}-carousel-item`}
      >
        <div className={styles.carousel_inner}>
          {speakersList.map((speaker: Speaker) => {
            const _itemId: number = speaker.id;
            return (
              <Col key={`${_itemId}-carousel-col`} className={styles.card_container}>
                <SpeakerCard
                  {...speaker}
                />
              </Col>
            )
          })}
        </div>
      </CarouselItem>
    )
  })

  return (
    <>
      <Container>
        <div id="speakers" className={styles.container}>
          <h1>Palestrantes</h1>
          <p>
            O time de palestrantes do Devfest Cerrado 2022 trás grandes nomes da área técnica e referências em liderança de comunidades. Reunimos em um só evento Google Developer Experts (GDEs), Tech Leads, pessoas desenvolvedoras e principalmente pessoas resolvedoras de problemas. Esse é um evento que visa fomentar a comunidade de tecnologia, indo além de conhecimento técnico, contando com muita interatividade, conexões e diversidade.
          </p>
          <div className={styles.cards}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              ride='carousel'
              className={styles.carousel}
            >
              {displaySpeakers}
            </Carousel>
          </div>
          {/*<div className={styles.button_container}>
            <a
              color="info"
              href="/speakers"
            >
              Ver todos
            </a>
  </div>*/}
        </div>
      </Container>
    </>
  );
}

export default SpeakersSection;

