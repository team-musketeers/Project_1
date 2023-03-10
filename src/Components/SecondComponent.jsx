import React from "react";

import useCustomHook from "./useCustomHook";

function SecondComponent(props){

	const clickedButton = useCustomHook(0 , "SecondComponent");
	
	return (
		<div>
			<h1> This is the Second Component</h1>
			<button onClick={clickedButton}>
			Click here!
			</button>
		</div>
	);
}

export default SecondComponent;