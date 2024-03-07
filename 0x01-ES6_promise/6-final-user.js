import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((result) => result.forEach((result) => {
    const arr = [];
    if (result.status === 'fulfilled') {
      arr.push({ status: result.status, value: result.value });
    } else {
      arr.push({
        status: result.status,
        value: `Error: ${result.reason.message}`,
      });
    }
    return arr;
  }));
}
