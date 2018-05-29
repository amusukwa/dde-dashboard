import React, { Component } from 'react'

class NavBar extends Component {
	render() {
		return (
			<div className="">
				<nav className=" dashboard-nav green darken-1">
					<div>
						<a href="#!" class="brand-logo">
							DDE DASHBOARD
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<a href="sass.html">LOGIN</a>
							</li>
							<li>
								<a href="badges.html">ADMIN</a>
							</li>
							<li>
								<a
									className="dropdown-trigger"
									href="#!"
									data-target="dropdown1"
								>
									Dropdown<i class="material-icons right">arrow_drop_down</i>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default NavBar
