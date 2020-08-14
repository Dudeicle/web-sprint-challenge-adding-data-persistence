const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	getTasks,
	getResources,
	getProjectByID,
	getProjectTasks,
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
} // WORKING

// RETRIEVING A LIST OF TASKS THAT INCLUDES THE PROJECT NAME AND DESCRIPTION THAT THEY ARE RELATED TO. SO NEED TO START WITH GRABBING A PROJECT BY ID, THEN JOINING THE TASKS THAT SHARE THE FOREIGN KEY OF PROJECT_ID, THEN RENDER A LIST OF TASKS FOR THAT PROJECT. I THINK THIS IS WHAT IS BEING ASKED OF ME.
// 1. project by id
// 2. join tasks using foreign key
// 3. return single project, and list of related tasks
function getProjectTasks(projects_id) {
	return db("projects")
		.where({ projects_id })
		.join("tasks", "projects.id", "=", "tasks.projects_id")
		.select(
			"tasks.id",
			"tasks.task_description",
			"tasks.projects_id",
			"projects.name",
			"projects.project_description"
		);
}
// above is only missing projects.description, once that works i have MVP
