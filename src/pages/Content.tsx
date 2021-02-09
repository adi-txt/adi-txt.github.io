import React from 'react'

import MailIcon from '../icons/MailIcon'
import ArenaIcon from '../icons/ArenaIcon'
import GithubIcon from '../icons/GithubIcon'
import InstagramIcon from '../icons/InstagramIcon'

const Content = () => (
  <>
    <section className="header">
      <h5 className="left">adi manjunath</h5>
    </section>
    <section className="text">
      <h6 className="section-header">presently:</h6>
      ad tech software dev &amp; design @&nbsp;
      <a className="kepler" href="https://www.keplergrp.com/">
        kepler
      </a>
    </section>
    <section className="text">
      <h6 className="section-header">previously:</h6>
      computer science @ the&nbsp;
      <a className="penn" href="https://www.upenn.edu/">
        university of pennsylvania
      </a>
      ,<br />
      marketing &amp; communication @ the&nbsp;
      <a className="usc" href="https://www.usc.edu/">
        university of southern california
      </a>
      , <br />
      research on gaze cueing in ads @ the&nbsp;
      <a className="wharton" href="https://neuro.wharton.upenn.edu/">
        wharton neuroscience initiative
      </a>
      ,<br />
      ad campaigns &amp; copy @&nbsp;
      <a className="vayner" href="https://vaynermedia.com/">
        vaynermedia
      </a>
    </section>
    <section className="text">
      <h6>occasionally:</h6>
      <a className="soundcloud" href="https://soundcloud.com/astdotwav">
        make &amp; mix music
      </a>
      ,<br />
      <a className="photo" href="https://adi.photos/">
        photograph places &amp; people
      </a>
      ,<br />
      <a className="society6" href="https://society6.com/adidotpng">
        experiment with generative art
      </a>
    </section>
    <section className="logos">
      <a href="https://www.are.na/adi">
        <ArenaIcon className="arena icon" />
      </a>
      <a href="https://www.instagram.com/adi.png">
        <InstagramIcon className="instagram icon" />
      </a>
      <a href="https://www.github.com/adidottxt">
        <GithubIcon className="github icon" />
      </a>
      <a href="mailto:work@adithya.co">
        <MailIcon className="email icon" />
      </a>
    </section>
  </>
)

export default Content
