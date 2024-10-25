# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Explain evenets in React ?

such as clicks, form submission, and input changes, are handled using functions attached to event props like onClick, onChange. etc


class based lifecycle methods such as componentDidMount. componentDidUpdate, and componentWillunmount.

Instead, these we can use useEffect hook.

React Lifecycle.

1. ComponentDidMount (Runs after the component Mounts)  
2. ComponentDidUpdate ( Runs after every render/update)
3. ComponentWillUnmount (Cleanup before the component unmounts)


useRef : is a hook that allows you to directly create a reference to a DOM element or a React element.

useMemo : is a hook that helps optimize performance by memoizing the result of a function.


Question : Why Use useMemo ?

Solution : whenever a component re-renders, all functions and calculations inside it run again


Syntax of useMemo

const memoizedValue = useMemo(() => {
    return value;
}, [dependencies]);

memoizedValue : The result stored and reused.

dependencies : Array of values that trigger recalculation when they change.