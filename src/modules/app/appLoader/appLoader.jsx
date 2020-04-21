const appLoader = async options => {
  let { splashScreenTime } = options;
  splashScreenTime = splashScreenTime || 0;

  const minSplashTimePromise = splashScreenTime
    ? new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, splashScreenTime);
      })
    : Promise.resolve();

  const loginPromise = new Promise(resolve => {
    return resolve(null);
  });

  const [splash, login] = await Promise.all([
    minSplashTimePromise,
    loginPromise
  ]);

  return {
    splashResponse: splash,
    loggedUserId: login
  };
};

export default appLoader;
