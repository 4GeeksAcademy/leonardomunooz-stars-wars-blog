import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


import Card from "../component/card.jsx";
export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div className="container">
			<div className="row" >
				<div className="col-12 ">
					<h2 className=" py-4 fs-3 text text-danger fw-bolder">
						Characters
					</h2>
				</div>
				<div className="custom-carrousel col-12 col-md-8 border border-danger">
					<div className="carrusel-custom ">



						{

							<Card
								people={store.peopleInitial}
							/>

							// store.people.map((people) => {
							// 	return (
							// 		<Card
							// 			name={people.name}
							// 			gender={people.gender}
							// 			hairColor={people.hair_color}
							// 			eyeColor={people.hair_color}
							// 		/>
							// 	)

							// })
						}
					</div>
				</div>
			</div>
		</div >
	)

}
