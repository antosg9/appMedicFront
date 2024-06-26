import env from '../../env.json';

export const environment = {
  production: false,
  apiUrl: env.apiUrl,
  auth0Domain: env.auth0Domain,
  auth0ClientId: env.auth0ClientId,
  apiUrlBackend: env.apiUrlBackend,
  auth0Audience: env.auth0Audience,
};
