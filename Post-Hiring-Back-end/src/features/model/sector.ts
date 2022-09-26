import { Console } from "console";

const sectorConnection = require('../../database/connection')

async function listAllSector() {
	const sql = `select * from public.sector`

	try {
		const res = await sectorConnection.client.query(sql);
		return res.rows;
	} catch (err) {
		return (err);
	}
}

async function insertSector(sector_name: string, description: string) {
	const sql = `insert into public.sector (sector_name, description)
    values ($1, $2) returning sector_id`
	const values = [sector_name, description]

	try {
		const res = await sectorConnection.client.query(sql, values);
		return res.rows;
	} catch (err) {
		return (err);
	}
}

async function deleteSector(sector_id: number) {
	try {
		const sql = `delete from public.sector where sector.sector_id = $1`
		const values = [sector_id]
		const res = await sectorConnection.client.query(sql, values);
		return res.rows;
	} catch (err) {
		return (err);
	}
}

async function updateSector(sector_id: number, sector_name: string, description: string) {
	const sql = `UPDATE public.sector 
                    SET  sector_name = $1, description = $2 where sector_id = $3;`
	const values = [sector_name, description, sector_id]
	try {
		const res = await sectorConnection.client.query(sql, values);
		return res.rows;
	} catch (err) {
		return (err);
	}
}

async function listOneSector(sector_id: number) {
	const sql = 'select * from sector where sector_id = $1;'
	const values = [sector_id]

	try {
		const res = await sectorConnection.client.query(sql, values);
		return res.rows;
	} catch (err) {
		return (err);
	}
}

module.exports = { listAllSector, insertSector, deleteSector, updateSector, listOneSector }