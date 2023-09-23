const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config({ path: 'C:/Giancarlo/Cursos/2023/Angular16-FernandoHerrera/10-mapsApp/src/.env' });

const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  mapbox_key: "${process.env['MAPBOX_KEY']}"
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
