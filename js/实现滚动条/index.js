const app = document.querySelector("#app");

const fangdou = (fn) => {
    let time = 100;
    let isExist = null;
    return (...args) => {
        if (isExist) clearTimeout(isExist);
        isExist = setTimeout(() => {
            fn(...args);
        }, time);
    };
};
const jieliu = (fn) => {
    let time = 0;
    let isExist = true;
    return (...args) => {
        if (isExist) {
            setTimeout(() => {
                fn(...args);
                isExist = true;
            }, time);
            isExist = false;
        }
    };
};
const jieliu2 = (fn) => {
    let time = 1000;
    let isExist = true;
    return (...args) => {
        setInterval((...args) => {
            if (isExist) {
              fn(...args)
              isExist = false
            }
        }, time);
    };
};
app.addEventListener(
    "scroll",
    jieliu(({ target }) => {
      let a= 1;
      for(let c=0; c <= 100000000;c++){
        a+="."
      }
      console.log(a)
    }),{passive:true}
);
