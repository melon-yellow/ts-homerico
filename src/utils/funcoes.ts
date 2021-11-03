/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/

// String to Hexadecimal
export function toHex(str: string) {
  // Set Variables
  let result: string = ''
  let bytes: number[] = []
  // Iterate over String Char
  Array(str.length).forEach((_v, i) => {
    const code = str.charCodeAt(i)
    bytes = bytes.concat([code & 0xff, code / 256 >>> 0])
  })
  // Iterate over Bytes
  bytes.forEach(v => {
    const char = v.toString(16)
    result += `${char.length < 2 ? '0' : ''}${char}`
  })
  // Return Hex String
  return result
}

/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/
