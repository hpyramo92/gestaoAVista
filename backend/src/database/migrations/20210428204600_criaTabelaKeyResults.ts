import Knex from "knex";

export async function up(knex: Knex) {
	// Cria tabela
	return knex.schema.createTable("KeyResults", table => {
		table.increments("id").primary();
		
		table.string("nome").notNullable();
		
		table.integer("objetivoId")
			.notNullable()
			.references("id")
			.inTable("Objetivo");
	});
}

export async function down(knex: Knex) {
	// Desfaz a alteração
	return knex.schema.dropTable("KeyResults");
}