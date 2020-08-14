exports.up = function (knex) {
	return knex.schema
		.table("projects")
		.renameColumn("descriptio", "projects_description");
};

exports.down = function (knex) {};
