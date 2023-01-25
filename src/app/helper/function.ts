export function onlyNumeric(e: KeyboardEvent) {
  let input = String.fromCharCode(e.which);
  console.log(input)
  return /^\d*\.?\d*$/.test(input);
}

const onlyNumberExp = /^\d?\d*$/
export function checkMobileNumber(val: string) {
  if (onlyNumberExp.test(val)) {
    return val
  } else {
    // return val.replace(/[A-Za-z`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    return val.match(/\d/g)?.join("") as string;
  }
}