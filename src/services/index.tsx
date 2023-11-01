export const shortenLink = async (link: string) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}?url=${link}`);
  return response.json();
};
