/*
 * Class name helper
 * @param {object}
 */
export default (obj = {}) => {
  return Object.keys(obj).filter(k => obj[k]).join(' ')
}
