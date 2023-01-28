const defaultSettings = {
  delay: 300,
  wait: 1500,
};

export const mergeSettings = () => {
  if (!userSettings) return defaultSettings;
  return { ...defaultSettings, ...userSettings };
};
