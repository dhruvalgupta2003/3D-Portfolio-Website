import React, { useEffect, useState } from 'react'
import DecoderText from '../../components/decoderText/DecoderText'
import "./styles.css"
import ScramblingText from '../../components/ScramblingText/ScramblingText';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { introAnimatedText, myName, shortDescription } from "../../constants/index";
// import { Link } from 'react-router-dom'

const Intro = () => {

    const animationClass = "fadeup", loaderDelay = 1000, mountDelay = 1000;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    const children = [
        <div style={{ paddingBottom: 15 }} className="hithere font-2-4">
            Hi There !
        </div>,
        <h1 className='myname mb-1x font-2-4'>
            <DecoderText text={`I’m ${myName}`} eachCharClass="namechar" delay={250} />
        </h1>,

        <h3>{shortDescription}</h3>,

        <div className="mytextcolorwhite fluidz-48 mb-5 font-2-4" style={{ fontWeight: 500 }}>
            <ScramblingText data={introAnimatedText} delay={1500} />
        </div>,
    ];

    return (
        <section id="home" className="section">
            <div className="intro_sec d-flex align-items-center">
                <div className="intro mx-auto">
                    <TransitionGroup component={null}>
                        {isMounted && children.map((item, i) => (
                            <CSSTransition mountOnEnter={false} key={`intro-transition-${i}`} classNames={animationClass} timeout={loaderDelay}>
                                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        </section>
    )
}

export default Intro;