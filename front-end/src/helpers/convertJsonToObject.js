const convertJsonToObject = (json) => {
  const reg = /"(.+)":\s/g;
  return json.replace(reg, '$1: ');
};

export default convertJsonToObject;
