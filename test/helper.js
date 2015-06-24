export default {
  sandbox() {
    const iframe = document.createElement('iframe')
    document.body.appendChild(iframe)
    const el = iframe.contentDocument.body

    const cleanup = () => {
      document.body.removeChild(iframe)
    }

    return {el, cleanup}
  }
}
