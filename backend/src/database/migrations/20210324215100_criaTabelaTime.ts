import Knex from "knex";

export async function up(knex: Knex) {
	// Cria tabela
	return knex.schema.createTable("Time", table => {
		table.increments("id").primary();
		table.string("nome").notNullable();
	});
}

export async function down(knex: Knex) {
	// Desfaz a alteração
	return knex.schema.dropTable("Time");
}