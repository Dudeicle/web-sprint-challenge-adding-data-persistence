const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	getProjectByID,
	addProject,
	getTasks,
	addTask,
	getResources,
	addResource,
};

// SIMPLE GET REQUESTS
function getProjects() {
	return db("projects");
} // WORKING
function getTasks() {
	return db("tasks");
} // WORKING
function getResources() {
	return db("resources");
} // WORKING

// GET PROJECT BY ID REQUEST
function getProjectByID(id) {
	return db("projects").where({ id }).first();
}

// ---------------------------
function addProject() {
	return db("resources");
}
function addTask() {
	return db("resources");
}
function addResource() {
	return db("resources");
}
