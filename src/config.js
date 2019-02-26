export const {
  AUTH_TOKEN,
  API_HOST,
  CANCEL_PATH,
  SEGMENT_ID
} = window.Segments.config;

export const URL_TABLES_BLUEPRINT = `${API_HOST}/api/v1/segments/criteria`;
export const URL_GET_PAYLOAD = `${API_HOST}/api/v1/segments/show`;
export const URL_POST_PAYLOAD = `${API_HOST}/api/v1/segments/detail`;
export const URL_COUNTER = `${API_HOST}/api/v1/segments/counts`;
export const URL_SUGGESTIONS = `${API_HOST}/api/v1/segments/related`;
export const URL_SEGMENT_CATEGORIES = `${API_HOST}/api/v1/segments/groups`;
