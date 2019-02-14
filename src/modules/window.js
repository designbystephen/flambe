export const closeCurrentWindow = () => {
  window.close();
};

export const openLink = async (event, element) => {
  event.preventDefault();

  await chrome.tabs.create({
    url: element.href
  });

  closeCurrentWindow();
};
