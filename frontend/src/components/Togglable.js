import React, { useState, forwardRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/display-name
const Togglable = forwardRef((props, refs) => {
    const [visible, setVisible] = useState(false);

    const hideWhenVisible = { display: visible ? "none" : "" };
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const setVisibility = value => {
        setVisible(value);
    };

    useImperativeHandle(refs, () => {
        return {
            visible,
            toggleVisibility,
            setVisibility,
        };
    });
    return (
        <div>
            <h2>{props.title}</h2>
            <div style={hideWhenVisible}>
                <button
                    id="toggleable-show"
                    className="button is-primary"
                    onClick={toggleVisibility}
                >
                    {props.buttonLabel}
                </button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button className="button mt-3" onClick={toggleVisibility}>
                    Hide
                </button>
            </div>
        </div>
    );
});

export default Togglable;
