import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const [uploadPhoto, createUser] = result;
      console.log(uploadPhoto.body, createUser.firstName, createUser.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
