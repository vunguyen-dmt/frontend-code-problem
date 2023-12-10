import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient, getHttpClient } from '@edx/frontend-platform/auth';

export const sendCode = (query) => {
  let baseUrl = '';
  if (getConfig().CODE_RUNNER_URL) {
    baseUrl = getConfig().CODE_RUNNER_URL;
  }
  return getHttpClient().post(baseUrl, query);
};

export const getStudioMe = () => {
  const baseUrl = getConfig().STUDIO_BASE_URL;
  return getAuthenticatedHttpClient().get(`${baseUrl}/api/user/v1/me`);
};
