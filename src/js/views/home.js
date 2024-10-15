import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import Card from "../component/card.jsx";
import CardPlanet from "../component/CardPlanet.jsx"

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div className="container">
			<div className="my-section">
				<h2 className=" py-4 fs-3 text text-danger fw-bolder">
					People
				</h2>
			</div>
			<div className="my-section my-container-carrousel">
				<div className="my-custom-carrousel">
					{
						store.people.map((item) => {
							return (
								<Card key={item._id} data={item} />
							)
						})
					}
				</div>
			</div>
			<div className="my-section">
				<h2 className=" py-4 fs-3 text text-danger fw-bolder">
					Planets
				</h2>
			</div>
			<div className="my-section my-container-carrousel">
				<div className="my-custom-carrousel">
					{
						store.planets.map((item) => {
							return (
								<CardPlanet key={item._id} data={item}  />
							)
						})
					}
				</div>
			</div>
		</div>
	)
}
