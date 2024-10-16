import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3 ">
				<div className="container">
					<Link to="/">
						<img src="https://www.pngarts.com/files/3/Star-Wars-Logo-PNG-Free-Download.png" style={{ width: 50, height: 50 }} />
					</Link>
					<div className="ml-auto">
						<Link to="/demo">
							<div className="btn-group">
								<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
								</button>
								<ul className="dropdown-menu dropdown-menu-end">
									{
										store.favorites.map((item) => {
											return (
												<li><Link className="dropdown-item d-flex justify-content-between" to="#">{item?.properties?.name} <span >x</span></Link> </li>
											)
										})
									}
								</ul>
							</div>
						</Link>
					</div>
				</div>

			</nav>

		</>
	);
};

// Notificationas <span className="badge bg-secondary">4</span>