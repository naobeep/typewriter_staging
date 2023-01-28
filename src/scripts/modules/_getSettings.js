const getSettingsJson = async () => {
  try {
    const jsonSettings = await fetch('/typewriter.config.json').then(res =>
      res.json()
    );
    return jsonSettings;
  } catch {
    console.log('typewriter.config.jsonをルート直下に格納してください');
  }
};
const settingsJson = await getSettingsJson();

const defaultSettings = {
  delay: 300,
  stand: 3000,
  waitReturnSound: 1500,
};

export const settings = { ...defaultSettings, ...settingsJson };
