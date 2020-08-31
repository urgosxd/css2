export const SSS = (data, media) => {
  var NEWDATA = Object.assign({}, data)

  const NewMedia = media.map(ele => {
    let obj = [ele.node.public_id, ele.node.secure_url]
    return obj
  })

  for (const key1 in NEWDATA) {
    if (Array.isArray(NEWDATA[key1]) === false) {
      if (NewMedia.flat().includes(NEWDATA[key1].img)) {
        Object.defineProperty(NEWDATA[key1], "img", {
          value: NewMedia.find(ele => ele[0] === NEWDATA[key1].img)[1],
          writable: true,
          enumerable: true,
          configurable: true,
        })
      } else {
        for (const key2 in NEWDATA[key1]) {
          if (Array.isArray(NEWDATA[key1][key2]) === true) {
            NEWDATA[key1][key2].forEach(ele => {
              if (NewMedia.flat().includes(ele.img)) {
                Object.defineProperty(ele, "img", {
                  value: NewMedia.find(ele2 => ele2[0] === ele.img)[1],
                  writable: true,
                  enumerable: true,
                  configurable: true,
                })
              }
            })
          }
        }
      }
    }
  }

  return NEWDATA
}
