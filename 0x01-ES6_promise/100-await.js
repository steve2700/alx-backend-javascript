import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;

