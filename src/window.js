export const closeCurrentWindow = () => {
  window.close();
};

export const openLink = (url) => {
  window.open(url);
  closeCurrentWindow();
};
