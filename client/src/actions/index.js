export const EXAMPLE = "EXAMPLE"

export const updateExample = (example) => {
    return {
      type: EXAMPLE,
      payload: example
    }
  }