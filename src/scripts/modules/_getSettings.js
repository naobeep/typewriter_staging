const defaultSettings = {
  delay: 300,
  wait: 1500,
};

export const mergeSettings = () => {
  if (userSettings === undefined) return defaultSettings;
  return { ...defaultSettings, ...userSettings };
};
