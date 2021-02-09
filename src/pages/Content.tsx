import React from 'react'

import Link from 'components/Link'
import Header from 'components/Header'
import Subheader from 'components/Subheader'

import MailIcon from 'icons/MailIcon'
import ArenaIcon from 'icons/ArenaIcon'
import GithubIcon from 'icons/GithubIcon'
import InstagramIcon from 'icons/InstagramIcon'

const Content = () => (
  <>
    <Header className="header" title="adi manjunath" />
    <div className="text">
      <Subheader title="presently:" />
      ad tech software dev &amp; design @&nbsp;
      <Link
        title="kepler"
        className="kepler"
        href="https://www.keplergrp.com"
      />
    </div>
    <div className="text">
      <Subheader title="previously:" />
      computer science @ the&nbsp;
      <Link
        className="penn"
        href="https://www.upenn.edu"
        title="university of pennsylvania"
      />
      ,<br />
      marketing &amp; communication @ the&nbsp;
      <Link
        className="usc"
        href="https://www.usc.edu"
        title="university of southern california"
      />
      , <br />
      research on gaze cueing in ads @ the&nbsp;
      <Link
        className="wharton"
        href="https://neuro.wharton.upenn.edu"
        title="wharton neuroscience initiative"
      />
      ,<br />
      ad campaigns &amp; copy @&nbsp;
      <Link
        className="vayner"
        title="vaynermedia"
        href="https://vaynermedia.com"
      />
    </div>
    <div className="text">
      <Subheader title="occasionally:" />
      <Link
        className="soundcloud"
        title="make &amp; mix music"
        href="https://soundcloud.com/astdotwav"
      />
      ,<br />
      <Link
        className="photo"
        title="photograph places &amp; people"
        href="https://adi.photos/"
      />
      ,<br />
      <Link
        className="society6"
        title="experiment with generative art"
        href="https://society6.com/adidotpng"
      />
    </div>
    <div className="logos">
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
    </div>
  </>
)

export default Content
