import React, { Component } from "react";
import "../../style/leaderboard.css";

export default class Table extends Component {
	render() {
		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr key="head">
							<th>Contributions</th>
							<th>Name</th>
							<th>Points</th>
							<th>Rank</th>
						</tr>
						<tr>
							<td>xyz</td>
							<td>SBI</td>
							<td>43</td>
							<td>
								<img
									src="https://res.cloudinary.com/duywqjry5/image/upload/v1625960183/1_yptyao.png"
									alt="hut"
									className="smallimg"
								></img>
							</td>
						</tr>
						<tr>
							<td>xyz</td>
							<td>Gblooms</td>
							<td>213</td>
							<td>
								<img
									src="https://res.cloudinary.com/duywqjry5/image/upload/v1625960183/2_ifq3gq.png"
									alt="house"
									className="smallimg"
								></img>
							</td>
						</tr>
						<tr>
							<td>xyz</td>
							<td>IMBN</td>
							<td>430</td>
							<td>
								<img
									src="https://res.cloudinary.com/duywqjry5/image/upload/v1625960183/3_uafmsw.png"
									alt="building"
									className="smallimg"
								></img>
							</td>
						</tr>
						<tr>
							<td>xyz</td>
							<td>IHF</td>
							<td>911</td>
							<td>
								<img
									src="https://res.cloudinary.com/duywqjry5/image/upload/v1625960183/4_yzmfor.png"
									alt="hut"
									className="smallimg"
								></img>
							</td>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		);
	}
}
