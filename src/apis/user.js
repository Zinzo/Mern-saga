import api from './api';

export function fetchUserProfile(userId) {
  const endPoint = 'https://jsonplaceholder.typicode.com';
  const userProfileUrl = `users/${userId}`;

  return api.get(
    endPoint,
    userProfileUrl, 
    null, 
  );
}