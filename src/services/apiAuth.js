import toast from "react-hot-toast";
import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signup({ email, password }) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateCurrentUser({ avatar, fullName }) {
  if (fullName) {
    const { data, error } = await supabase.auth.updateUser({
      data: { fullName },
    });

    if (error) throw new Error(error);
    return data;
  }
  // 1. Avatar
  if (avatar) {
    const { data, error } = await supabase.auth.getUser();
    const fileName = `avatar-${data.user.id}-${Math.random()}`;

    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar);

    if (error) throw new Error(storageError.message);

    // 2. update avatar user
    const { data: updatedUser, error: error2 } = await supabase.auth.updateUser(
      {
        data: {
          avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
        },
      }
    );
    if (error2) throw new Error(storageError.message);

    return updatedUser;
  }
}
