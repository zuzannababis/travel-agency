import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => {this.forceUpdate();}, 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render () {
    const {title, description} = this.props;
    const getCountdownTime = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={'title'}>{title}</h3>
        <p className={'promoDescription'}>{getCountdownTime > 23 * 60 * 60 ? description : getCountdownTime}</p>
      </div>
    );
  }
}

export default HappyHourAd;