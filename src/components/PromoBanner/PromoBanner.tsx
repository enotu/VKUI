import React from 'react';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Button from '../Button/Button';
import Cell from '../Cell/Cell';
import Avatar from '../Avatar/Avatar';

type BannerData = {
  title?: string;
  url_types?: string; // eslint-disable-line camelcase
  bannerID?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageLink?: string;
  trackingLink?: string;
  type?: string;
  iconWidth?: number;
  domain?: string;
  ctaText?: string;
  advertisingLabel?: string;
  iconLink?: string;
  statistics?: { type: string; url: string }[];
  openInBrowser?: boolean;
  iconHeight?: number;
  directLink?: boolean;
  navigationType?: string;
  description?: string;
  ageRestriction?: number;
};

export interface PromoBannerProps {
  /** Данные рекламного баннера, полученные из VKWebAppGetAds */
  bannerData: BannerData;
  /** Фиксированное позиционирование блока (position: fixed) */
  isFixed?: boolean;
  /** Положение блока при фиксированном позиционировании */
  verticalAlign?: 'top' | 'bottom';
  /** Флаг скрытия кнопки закрытия рекламы */
  isCloseButtonHidden?: boolean;
  /** Хандлер закрытия рекламы */
  onClose: () => void;
}

const PromoBanner = (props: PromoBannerProps) => (
  <div className="PromoBanner">
    <div className="PromoBanner__head">
      {props.bannerData.ageRestriction && <span className="PromoBanner__age">14+</span>}
      <span className="PromoBanner__label">{props.bannerData.advertisingLabel || 'Advertisement'}</span>

      {!props.isCloseButtonHidden && (
        <div className="PromoBanner__close" onClick={props.onClose}>
          <Icon24Dismiss />
        </div>
      )}
    </div>
    <a
      href={props.bannerData.trackingLink}
      rel="nofollow noopener noreferrer"
      target="_blank"
      className="PromoBanner__clickable-body"
    >
      <div className="PromoBanner__content">
        <Cell
          before={
            // @ts-ignore
            <Avatar type="image" size={48} src={props.bannerData.iconLink} alt={props.bannerData.title} />
          }
          asideContent={<Button level="outline">{props.bannerData.ctaText}</Button>}
          description={props.bannerData.domain}
        >
          {props.bannerData.title}
        </Cell>
      </div>
    </a>
  </div>
);

export default PromoBanner;
