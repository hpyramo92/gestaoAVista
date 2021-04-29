import Knex from "knex";

export async function up(knex:Knex) {
	return knex.schema.createTable("Objetivo", table => {
		table.increments("id").primary();

		table.string("nome");

		table.integer("missaoId")
			.notNullable()
			.references("id")
			.inTable("Missao");
	});
}

export async function down(knex:Knex) {
	return knex.schema.dropTable("Objetivo");
}