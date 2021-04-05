export let required = value => {
  if (value) return undefined
  return "Field required"
}

export let maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length <= maxLength) return undefined 
  return `Max length ${maxLength} symbols`
}