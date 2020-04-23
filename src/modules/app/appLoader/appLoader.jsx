const appLoader = async options => {
  let {splashScreenTime} = options;
  splashScreenTime = splashScreenTime || 0;

  let minSplashTimePromise;
  if (splashScreenTime) {
    minSplashTimePromise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, splashScreenTime);
    });
  } else {
    minSplashTimePromise = Promise.resolve();
  }

  const loginPromise = new Promise(resolve => {
    return resolve(null);
  });

  const [splash, login] = await Promise.all([minSplashTimePromise, loginPromise]);

  return {
    splashResponse: splash,
    loggedUserId: login,
  };
};

export default appLoader;
