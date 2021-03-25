import Knex from "knex";

export async function up(knex: Knex) {
	// Cria tabela
	return knex.schema.createTable("Usuario", table => {
		table.increments("id").primary();
		
		table.string("nome").notNullable();
		
		table.integer("timeId")
			.notNullable()
			.references("id")
			.inTable("Time");
	});
}

export async function down(knex: Knex) {
	// Desfaz a alteração
	return knex.schema.dropTable("Usuario");
}