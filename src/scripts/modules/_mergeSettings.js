const defaultSettings = {
  delay: 300,
  wait: 1500,
  stand: 1500,
};

export const mergeSettings = () => {
  if (typeof userSettings == 'undefined' || userSettings === undefined)
    return defaultSettings;
  return { ...defaultSettings, ...userSettings };
};
