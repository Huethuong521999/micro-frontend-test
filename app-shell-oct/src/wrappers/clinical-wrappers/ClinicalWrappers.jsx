import { createElement, useEffect, useRef } from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

export function ClinicalWrappers(props) {
    const { component } = props;
    const host = useRef();

    useEffect(() => {
        const root = ReactDOM.createRoot(host.nativeElement); 
        root.render(createElement(component));

        return(() => {
            root.unmount();
        })
    })
}