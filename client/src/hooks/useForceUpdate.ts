import {useState, useCallback} from 'react';

/**
 * Хук для принудительного перезапуска эффекта
 *
 * @example
 * ```ts
 * const Demo = () => {
 *   const [trigger, updateTrigger] = useForceUpdate();
 *
 *   useEffect(
 *       () => {
 *           console.log('Эффект случился!');
 *       },
 *       [trigger],
 *   );
 *
 *   return (
 *       <button onClick={updateTrigger}>Запустить эффект</button>
 *   )
 * }
 * ```
 *
 * @returns массив: крючок для запуска хука и метод для изменения крючка
 */
export function useForceUpdate(): [boolean, () => void] {
    const [state, setState] = useState(false);
    const toggleState = useCallback(
        () => setState((prevState) => !prevState),
        [],
    );
    return [state, toggleState];
}
