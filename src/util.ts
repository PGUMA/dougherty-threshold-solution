export const not = (val: any) => {
  if (typeof val === 'function') {
    return !val()
  } else {
    return !val
  }
}

export const sleep = (wait: number) => {
  return new Promise<void>(function (resolve) {
    setTimeout(function () {
      resolve()
    }, wait)
  })
}
