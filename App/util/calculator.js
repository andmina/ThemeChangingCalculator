export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return {
      currentValue: `${value}`,
    };
  }
  return {
    currentValue: `${state.currentValue}${value}`,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };

  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState,
    };
  }
  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState,
    };
  }
  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState,
    };
  }
  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState,
    };
  }
  return state;
};

export default function calculator(type, value, state) {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "sq-root":
      return {
        currentValue: `${Math.sqrt(parseFloat(state.currentValue))}`,
      };
    case "squared":
      return {
        currentValue: `${parseFloat(state.currentValue) ** 2}`,
      };
    case "factorial":
      if (state.currentValue === "0" || state.currentValue === "1") {
        return {
          currentValue: state.currentValue,
        };
      }
      let num = parseFloat(state.currentValue);
      for (let i = num - 1; i > 0; i--) {
        num *= i;
      }
      return {
        currentValue: `${num}`,
      };
    default:
      return state;
  }
}
