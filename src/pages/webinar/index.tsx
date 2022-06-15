import React from 'react';
import { MyButton } from '../../components/btn';
import styles from './Webinar.module.scss';

const Webinar:React.FC = () => {
    return (
        <div className={styles.webinar}>
            <div className={'container-full'}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <div className={styles.user}>
                                    <div className={styles.ava}>
                                    </div>
                                    <p className={styles.name}>
                                        Цифровой прорыв
                                    </p>
                                </div>
                            </div>
                            <div className={styles.body}>
                                <p className={styles.title}>
                                    Гибридный хакатон по искусственному интеллекту
                                </p>
                            </div>
                            <div className={styles.footer}>
                                <p className={styles.date}>
                                    Сегодня
                                </p>
                                <p className={styles.type}>
                                    Онлайн
                                </p>
                                <p className={styles.dop}>
                                    Бесплатно
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.photo}>
                        <img src="https://leonardo.osnova.io/eb8e38da-c9ca-5b23-b95a-690b77288448/-/preview/1100/-/format/webp/"
                            className={styles.img}
                            alt=""
                        />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h2>О чем пойдет речь</h2>
                            <ul>
                                <li>Расскажем о требованиях рынка труда к начинающим менеджерам проектов и нюансах собеседований. Разберём «мягкие» и технические навыки, которые пригодятся в работе, а выпускники курса «Менеджер проектов» расскажут о своём карьерном пути, курсе и первых шагах в новой для себя сфере.</li>
                                <li>На что обращают внимание работодатели, когда нанимают начинающих менеджеров проектов.</li>
                                <li>Собеседования — как к ним подготовиться, что будут спрашивать и какие могут быть каверзные вопросы.</li>
                                <li>Какие знания и навыки нужны менеджеру проектов в работе.</li>
                                <li>Как и чему мы учим в «Практикуме». Кому полезен курс «Менеджер проектов» и как он повлияет на вашу карьеру.</li>
                                <li>Круглый стол с выпускниками курса: их путь, впечатления от учёбы, планы на будущее и отзывы.</li>
                            </ul>
                        </div>
                        <div className={styles.when}>
                            <p className={styles.when_title}>Где и когда</p>
                            <p className={styles.place}>Онлайн</p>
                            <p className={styles.time}> 27 мая, 19:00, московское время </p>
                        </div>
                        <div className={styles.price}>
                            <p className={styles.price_title}>Стоимость</p>
                            <p className={styles.price_text}>Бесплатно</p>
                        </div>
                        <div className={styles.footer}>
                            <MyButton text="Зарегистрироваться" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Webinar;