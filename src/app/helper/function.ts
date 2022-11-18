export function onlyNumeric(e: KeyboardEvent) {
    let input = String.fromCharCode(e.which);
    return /^\d*\.?\d*$/.test(input);
  }