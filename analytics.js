//console.log('Sending analytics...');

const intervalId = setInterval(() => {
    console.log('Sending analytics data...')
  }, 2000);
  

  //to clear the interval
  document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(intervalId);
    //clearTimeout() will also work
  });