import PropTypes from "prop-types";
import { useReducer } from "react";
import "./PropertyDefaultWrapper.css";

interface Props {
    property1: "variant-2" | "default";
}

export const PropertyDefaultWrapper = ({ property1 }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`rectangle ${state.property1}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            {state.property1 === "variant-2" && <div className="text-wrapper">Usuario123</div>}
        </div>
    );
};

function reducer(state: any, action: any) {
    switch (action) {
        case "click":
            return {
                ...state,
                property1: "variant-2",
            };
    }

    return state;
}

PropertyDefaultWrapper.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};

