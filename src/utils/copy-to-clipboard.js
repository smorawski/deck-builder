export default (text) => {
  const virtualElement = document.createElement('textarea');
  virtualElement.value = text;
  document.body.appendChild(virtualElement);
  virtualElement.select();
  document.execCommand('copy');
  document.body.removeChild(virtualElement);
};
