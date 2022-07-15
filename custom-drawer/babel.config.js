module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
    // Importante: Necessário plugin abaixo para funcionar drawer navigator. 
    // Caso ainda dê erro, digite o comando "expo r -c" para limpar o cache
    plugins: ['react-native-reanimated/plugin'],
  };
};
