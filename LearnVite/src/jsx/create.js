export const create = (element, attributes, content) => {
  const node = document.createElement(element);
  Object.entries(attributes || {}).forEach(([name, value]) => {
    node.setAttribute(name, value);
  });

  if (typeof content === "string") {
    content = document.createTextNode(content);
  }

  node.appendChild(content);
  return node;
};
