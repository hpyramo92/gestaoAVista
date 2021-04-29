import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("Missao", table => {
        table.increments("id").primary();

        table.string("nome");
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("Missao");
}
