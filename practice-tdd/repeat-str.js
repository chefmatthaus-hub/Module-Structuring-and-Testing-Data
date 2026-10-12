export function repeatStr(str, count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result = result + str;
  }

  if (count < 0) {
    throw new Error("Count cannot be negative");
  }
    return result;  
}
