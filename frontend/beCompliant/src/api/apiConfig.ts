import useBackendUrl from '../hooks/backendUrl';

// Query Keys / Individual paths
const PATH_ANSWERS = '/answers';
const PATH_ANSWER = '/answer';
const PATH_COMMENTS = '/comments';
const PATH_METODEVERK = '/metodeverk';
const PATH_KONTROLLERE = '/kontrollere';

// Base URLs

const API_URL_BASE = () => {
  return useBackendUrl();
};

// API Endpoints
const API_URL_ANSWERS = `${API_URL_BASE()}${PATH_ANSWERS}`;
const API_URL_ANSWER = `${API_URL_BASE()}${PATH_ANSWER}`;
const API_URL_COMMENTS = `${API_URL_BASE()}${PATH_COMMENTS}`;
const API_URL_METODEVERK = `${API_URL_BASE()}${PATH_METODEVERK}`;

export const apiConfig = {
  answers: {
    queryKey: [PATH_ANSWERS],
    url: API_URL_ANSWERS,
    withTeam: {
      queryKey: (team: string) => [PATH_ANSWERS, team],
      url: (team: string) => `${API_URL_ANSWERS}/${team}`,
    },
  },
  answer: {
    queryKey: [PATH_ANSWER],
    url: API_URL_ANSWER,
  },
  comments: {
    queryKey: [PATH_COMMENTS],
    url: API_URL_COMMENTS,
    withTeam: {
      queryKey: (team: string) => [PATH_COMMENTS, team],
      url: (team: string) => `${API_URL_COMMENTS}/${team}`,
    },
  },
  metodeverk: {
    queryKey: [PATH_METODEVERK],
    url: API_URL_METODEVERK,
  },
  kontrollere: {
    queryKey: (team?: string) => [PATH_KONTROLLERE, team],
    url: (team?: string) => `${API_URL_BASE()}/${team}${PATH_KONTROLLERE}`,
  },
} as const;
