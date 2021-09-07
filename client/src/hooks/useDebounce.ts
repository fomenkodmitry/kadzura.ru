export const useDebounce = (f: (...args : any[]) => any, ms : number) => {
    let timer: number;
    return (...args : any[]) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => { f.apply(this, args); }, ms);
    };
}