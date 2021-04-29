import Knex from "knex";

export async function up(knex: Knex) {
	// Cria tabela
	return knex.schema.createTable("Acao", table => {
		table.increments("id").primary();
		
		table.string("nome").notNullable();

		table.integer("responsavelId")
			.notNullable()
			.references("id")
			.inTable("Responsavel");
		
		table.integer("keyResultId")
			.notNullable()
			.references("id")
			.inTable("KeyResult");
	});
}

export async function down(knex: Knex) {
	// Desfaz a alteração
	return knex.schema.dropTable("Acao");
}