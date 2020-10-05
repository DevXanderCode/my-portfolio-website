import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Link } from '@material-ui/core';

const TableView = ({ rows, columns }) => {
	return (
		<Paper>
			<Table>
				<TableHead>
					<TableRow>
						{columns ? columns.map((col, i) => <TableCell key={i}>{col.label}</TableCell>) : null}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows ? (
						rows.map((row, i) => (
							<TableRow>
								{columns.map((col, idx) => (
									<TableCell key={idx}>
										{col.name === 'id' ? (
											<Link to={`/admin/posts/edit/${row[col.name]}`} component={RouterLink}>
												{row[col.name]}
											</Link>
										) : (
											row[col.name]
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : null}
				</TableBody>
			</Table>
		</Paper>
	);
};

export default TableView;
