const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	getTasks,
	getResources,
	getProjectByID,
	addProject,
	addTask,
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
} // WORKING

// ADDING A PROJECT TO THE LIST OF PROJECTS
function addProject(project) {
	return db("projects")
		.insert(project)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getProjectByID(id);
		});
} // WORKING

// ADDING A TASK TO THE LIST OF TASKS
function addTask(task) {
	return db("tasks")
		.insert(task)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getTasks;
		});
} // WORKING

// ADDING A RESOURCE TO THE LIST OF RESOURCES
function addResource(resourse) {
	return db("resources")
		.insert(resourse)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getResources;
		});
}
