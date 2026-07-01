

import express from "express";
import upload from "../Middleware/uploadMiddleware.js";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  addTask,
  updateTask,
  deleteTask,
  uploadDocument,
  deleteDocument,
} from "../Controllers/project.controller.js";

const router = express.Router();



router.route("/")
  .get(getProjects)
  .post(createProject);

router.route("/:id")
  .put(updateProject)
  .delete(deleteProject);

/* ===========================
   TASK ROUTES
=========================== */

router.post("/:id/tasks", addTask);

router
  .route("/:projectId/tasks/:taskId")
  .put(updateTask)
  .delete(deleteTask);

/* ===========================
   DOCUMENT ROUTES
=========================== */

router.post(
  "/:id/documents",
  upload.single("file"),
  uploadDocument
);

router.delete(
  "/:projectId/documents/:documentId",
  deleteDocument
);

export default router;