import Knex from "knex";

export async function up(knex: Knex) {
	// Cria tabela
	return knex.schema.createTable("KeyResultsGrauDeConfianca", table => {
		table.increments("id").primary();
		
		table.integer("keyResultId")
			.notNullable()
			.references("id")
			.inTable("KeyResults");
		
		table.integer("grauDeConfiancaId")
			.notNullable()
			.references("id")
			.inTable("GrauDeConfianca");

		table.date("data")
			.notNullable();
	});
}

export async function down(knex: Knex) {
	// Desfaz a alteração
	return knex.schema.dropTable("KeyResultsGrauDeConfianca");
}