import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";


import Card from "../component/card.jsx";
export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div className="container">
			<div className="row" >
				<div className="col-12">
					<h2 className=" py-4 fs-3 text text-danger fw-bolder">
						Characters
						h3
					</h2>
				</div>
			</div>

			<div className="row">
				<div className="my-custom-carrousel col-12 ">
					{

						store.people.map((item) => {
							return (
								<Card key={item._id} data={item} />
							)
						})


					}

				</div>
			</div>

		</div>

	)

}
