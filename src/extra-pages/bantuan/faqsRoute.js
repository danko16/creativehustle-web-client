import React, { useState } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import ClassNames from 'classnames';

import faqs from './faqs';
import Sidebar from './sidebar';

function FaqsRoute() {
  let { path } = useRouteMatch();
  const [showFaq, setShowFaq] = useState({});

  function renderFaqs(faqName) {
    return faqs
      .filter((faq) => faq.name === faqName)
      .map((val) => {
        const arcodionName = `${faqs.name}_${val.id}`;
        let descLg = false;
        let descSm = false;

        if (val.desc.length > 450) {
          descLg = true;
        }

        if (val.desc.length > 300 && val.desc.length < 450) {
          descSm = true;
        }

        return (
          <li
            key={val.id}
            className={ClassNames('accordion_item', {
              'desc-lg': descLg,
              'desc-sm': descSm,
              active: showFaq[arcodionName],
            })}
            onClick={() => {
              setShowFaq((prevState) => ({
                [arcodionName]: !prevState[arcodionName],
              }));
            }}
            onTransitionEnd={(el) => {
              const accordionItem = el.target.parentNode;
              if (showFaq[arcodionName]) {
                accordionItem.children[0].style.setProperty('color', '#3874ff');
                accordionItem.children[1].className = 'fa fa-minus-circle';
              } else if (!showFaq[arcodionName]) {
                accordionItem.children[0].style.setProperty('color', '#5c6185');
                accordionItem.children[1].className = 'fa fa-plus-circle';
              }
            }}
          >
            <p>{val.title}</p>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            <div className={`content-text`} dangerouslySetInnerHTML={{ __html: val.desc }}></div>
          </li>
        );
      });
  }

  return (
    <div className="bantuan-wrapper container fs-18">
      <Sidebar />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to="/bantuan/akun" />
        </Route>
        <Route path={`${path}/akun`}>
          <div className="content">
            <ul>{renderFaqs('account_faq')}</ul>
          </div>
        </Route>
        <Route path={`${path}/pembayaran`}>
          <div className="content">
            <ul>{renderFaqs('payment_faq')}</ul>
          </div>
        </Route>
        <Route Route path={`${path}/refund`}>
          <div className="content">
            <ul>{renderFaqs('refund_faq')}</ul>
          </div>
        </Route>
        <Route Route path={`${path}/kursus`}>
          <div className="content">
            <ul>{renderFaqs('kursus_faq')}</ul>
          </div>
        </Route>
        <Route Route path={`${path}/webinar`}>
          <div className="content">
            <ul>{renderFaqs('webinar_faq')}</ul>
          </div>
        </Route>
        <Route Route path={`${path}/sertifikat`}>
          <div className="content">
            <ul>{renderFaqs('sertifikat_faq')}</ul>
          </div>
        </Route>
        <Route Route path={`${path}/mentor`}>
          <div className="content">
            <ul>{renderFaqs('mentor_faq')}</ul>
          </div>
        </Route>
        <Route Route path={`${path}/lainya`}>
          <div className="content">
            <ul>{renderFaqs('etc_faq')}</ul>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default FaqsRoute;
