/*eslint-disable*/
import Image from "next/image";
import React, { useState } from "react";

import ProfileImage from '../../assets/images/ProfileImage.svg';
import styles from '../../styles/Speakers.module.css'


interface SpeakerCardProps extends Speaker { }

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  id,
  speaker_name,
  location,
  topic,
  title,
}) => {
  return (
    <>
      <div className={styles.card_content}>
        <Image className={styles.card_image} src={ProfileImage} alt={`Foto ${speaker_name}`} width="90%" height="90%" />
        <h2 className={styles.card_name}>{speaker_name}</h2>
        <p className={styles.card_location}>{`${location.city} ${location.uf}`}</p>
        <p className={styles.card_topic}>Tema</p>
        <p className={styles.card_topic}>{topic}</p>
        <p className={styles.card_profile}>{title}</p>
      </div>
    </>
  );
}

export default SpeakerCard;

