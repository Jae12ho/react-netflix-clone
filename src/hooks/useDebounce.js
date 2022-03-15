import {useState, useEffect} from "react";

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        // 리턴에 함수를 넣음 => 바로 실행 X
        // Clean up function 참고
        return () => {
            clearTimeout(handler);
            console.log("clear TimeOut");
        }
    }, [value, delay]);

return debounceValue;
}