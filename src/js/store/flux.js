const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			endpoints: ["people", "planets"],
			people: JSON.parse(localStorage.getItem('people')) || [],
			planets: JSON.parse(localStorage.getItem('planets')) || [],
			favorites: []
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

				if (store.people <= 0 || store.planets <= 0) {
					try {
						for (let endpoint of store.endpoints) {
							const response = await fetch(`${store.urlBase}/${endpoint}`)
							const data = await response.json()
							console.log(data.results)

							for (let item of data.results) {
								const response = await fetch(`${item.url}`)
								const data = await response.json()
								// console.log(data.result);

								setStore({
									[endpoint]: [
										...store[endpoint],
										data.result
									]
								})
								// console.log([...getStore()[endpoint]]);

								localStorage.setItem(endpoint, JSON.stringify([
									...getStore()[endpoint],
									data.result
								]))

							}
						}
					} catch (error) {
						console.log(error);
					}
				}

			},
			handleFavorite: (fav) => {
				let store = getStore()
				let exists = store.favorites.some((item) => item._id == fav._id)

				if (exists) {
					getActions().deleteFav(fav)
				} else {

					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},
			deleteFav: (fav) => {
				let store = getStore()
				let newFavList = store.favorites.filter((item) => item._id != fav._id)
				setStore({
					favorites: newFavList
				})
			}
		}
	};
};

export default getState;
