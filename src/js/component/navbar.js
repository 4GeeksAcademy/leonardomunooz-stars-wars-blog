import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
									Favorites <span className="badge bg-secondary">4</span>
								</button>
								{/* <ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
									<li><hr className="dropdown-divider" /></li>
									<li><a className="dropdown-item" href="#">Separated link</a></li>
								</ul> */}
							</div>
						</Link>
					</div>
				</div>

			</nav>

		</>
	);
};

// Notificationas <span className="badge bg-secondary">4</span>