const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},

			],
			urlBase: "https://www.swapi.tech/api",
			people: [],
			peopleInitial: {
				section: "character",
				name: "Luke skywalker",
				hairColor: "blond",
				eyeColor: 'blue'
			}

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllPeople: async () => {

				const urlBase = getStore()
				try {
					const response = await fetch(`${urlBase}/people`)
					const data = await response.json(response)
					console.log(data.result);

					if (response.ok) {
						console.log('users exists');
						setStore(
							{ people: data.result.properties }
						)
					} else {
						console.log("users doesnt exits");
					}
				} catch (error) {
					console.log(error);

				}
			}
		}
	};
};

export default getState;
