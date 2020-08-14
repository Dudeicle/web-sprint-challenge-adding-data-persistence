const express = require("express");

const Project = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
	Project.getProjects()
		.then((projects) => {
			res.json(projects);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get list of projects" });
		});
}); // WORKING

router.get("/tasks", (req, res) => {
	Project.getTasks()
		.then((tasks) => {
			res.json(tasks);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get list of tasks" });
		});
}); // WORKING

router.get("/resources", (req, res) => {
	Project.getResources()
		.then((resources) => {
			res.json(resources);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get list of resources" });
		});
}); // WORKING

router.get("/:id", (req, res) => {
	const { id } = req.params;

	Project.getProjectByID(id)
		.then((project) => {
			if (project) {
				res.json(project);
			} else {
				res
					.status(404)
					.json({ message: "Could not find single project of that id" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to get single project" });
		});
}); // WORKING

module.exports = router;
