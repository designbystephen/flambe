export const closeCurrentWindow = () => {
  window.close();
};

export const openLink = async (event, element) => {
  event.preventDefault();

  await browser.tabs.create({
    url: element.href
  });

  closeCurrentWindow();
};
