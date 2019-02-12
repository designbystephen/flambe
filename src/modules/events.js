export const listen = (selector, eventName, fn) => {
  document.querySelectorAll(selector).forEach(element => {
    element.addEventListener(eventName, (event) => fn(event, element));
  });
};


