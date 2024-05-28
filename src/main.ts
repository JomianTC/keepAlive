document.addEventListener( "DOMContentLoaded", () => {

	const requestButton = document.getElementById( "requestButton" ) as HTMLButtonElement;
	const responseLabel = document.getElementById( "responseLabel" ) as HTMLLabelElement;

	requestButton.addEventListener( "click", async () => {

		try {
			
			const response = await fetch( "https://escom-ia.onrender.com/api/status" );

			if ( !response.ok ) throw new Error( "Error en la petición" );

			const data = await response.json();
			responseLabel.textContent = data.mensaje;

			requestButton.id = "requestButtonOK";
			requestButton.textContent = "IS ALIVE!!!";

		} catch ( error: any ) { 
			responseLabel.textContent = `Error!!!: ${error.message}`;
			requestButton.textContent = "IS DEAD!!!";
		}
	});
});
