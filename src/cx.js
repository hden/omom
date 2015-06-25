/*
 * Class name helper
 * @param {object}
 */
export default (obj) => {
  if (obj) {
    return Object.keys(obj).filter(k => obj[k]).join(' ')
  } else {
    return ''
  }
}
