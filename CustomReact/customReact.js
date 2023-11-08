function customRender(domElement, container) {
  /* const newElement = document.createElement(domelement.type);
  newElement.innerHTML = domElement.innerText;
  newElement.setAttribute("href", domelement.props.href);
  newElement.setAttribute("target", domelement.props.target);
  container.append(newElement);*/

  const newElemen = document.createElement(domElement.type);
  newElemen.innerHTML = domElement.innerText;
  for (let prop in domElement.props) {
    newElemen.setAttribute(prop, domElement.props[prop]);
  }
  container.appendChild(newElemen);
}

const rootDiv = document.querySelector("#root");

const domElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  innerText: "Click Here To Go To Google",
};

customRender(domElement, rootDiv);
