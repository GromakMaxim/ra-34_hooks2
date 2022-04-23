import React from "react";
import ExpectSuccess from "./ExpectSuccess";
import '../css/defaults.css';
import ExpectError from "./ExpectError";
import ExpectLoading from "./ExpectLoading";

export default function Widget(props) {

    return (
        <div>
            <ExpectSuccess/>
            <ExpectError/>
            <ExpectLoading/>
        </div>
    );
}
