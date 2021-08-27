
//util for check if user have token
export const isTranporter = () => {
  return parseInt(localStorage.getItem("role")) == 1
    
};
