import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.alterTable("Time", table => {
        table.integer("missaoId")
			.nullable()
			.references("id")
			.inTable("Missao");
    });
}

export async function down(knex: Knex) {
	
}
