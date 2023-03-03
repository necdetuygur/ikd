const MatchAll = (str, regex) => {
  let m;
  let ret = {};
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    m.forEach((match, groupIndex) => {
      ret[groupIndex] = match;
    });
  }
  return ret;
};

export default MatchAll;
