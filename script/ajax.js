


export default class Ajax {
  constructor() {

  }

  req(method, url, options) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open(method, url)
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            resolve(request.response)
          } else if (request.status >= 400) {
            reject(resquest)
          }
        }
      }
      request.send()
    });
  }
}
