export const formatTime = seconds => {

  if(seconds == null || isNaN(seconds) || seconds < 0) {
    return null;
  } else {
    let date = new Date(null);

    date.setSeconds(seconds);
    const result = date.toISOString().substr(11, 8);
    return result;
  }

};