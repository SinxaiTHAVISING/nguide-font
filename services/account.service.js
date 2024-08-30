import API from './apiClient';

export default {
  confirmpassword(userId, passwordHash) {
    const url = `/account/confirm/password/${userId}`;
    const data = {
        passwordHash: passwordHash,
    };
    return API.post(url, data)
  }
};
