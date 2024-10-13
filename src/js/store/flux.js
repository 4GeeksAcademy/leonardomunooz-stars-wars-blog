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
			endpoints: ["people"],
			people: [],
			planets: []
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
				const store = getStore()

				try {
					for (let endpoints of store.endpoints) {
						const response = await fetch(`${store.urlBase}/${endpoints}`)
						const data = await response.json()
						// console.log(data.results)

						for (let item of data.results) {
							const response = await fetch(`${item.url}`)
							const data = await response.json()
							console.log(data.result);

							setStore({
								[endpoints]: [
									...store[endpoints],
									data.result
								]
							})
							// localStorage.setItem('people', JSON.stringify(data))
						}
					}
				} catch (error) {

				}

			}
		}
	};
};

export default getState;
