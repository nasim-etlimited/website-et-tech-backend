const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
// const userController = require('../../controllers/user.controller');
const { careerController } = require('../../controllers');

const router = express.Router();

router.get('/job-list', careerController.getJobList);
router.post('/job-list', careerController.postJob);
router.get('/job-list/:id', careerController.getJobById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job management and retrieval
 */

/**
 * @swagger
 * /career/job-list:
 *   get:
 *     summary: Retrieve a list of all job postings
 *     description: Fetches all job postings from the database.
 *     tags: [Jobs]
 *     responses:
 *       "200":
 *         description: A list of job postings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier for the job
 *                   title:
 *                     type: string
 *                     description: The title of the job
 *                   location:
 *                     type: string
 *                     description: The location of the job
 *                   type:
 *                     type: string
 *                     description: The type of job (e.g., Full-time, Part-time)
 *                   department:
 *                     type: string
 *                     description: The department where the job is located
 *                   lastDate:
 *                     type: string
 *                     format: date
 *                     description: The last date to apply for the job
 *                   jobDescription:
 *                     type: string
 *                     description: The detailed description of the job
 *                   responsibilities:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of job responsibilities
 *                   requirements:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of job requirements
 *                   benefits:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of job benefits
 *                   vacancy:
 *                     type: integer
 *                     description: Number of available positions
 *                   jobType:
 *                     type: string
 *                     description: The type of job (e.g., Full-time, Part-time)
 *                   workingDays:
 *                     type: string
 *                     description: Working days (e.g., "Monday - Friday")
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 *   post:
 *     summary: Create a new job posting
 *     description: Only admins can create new job postings.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - location
 *               - type
 *               - department
 *               - lastDate
 *               - jobDescription
 *               - responsibilities
 *               - requirements
 *               - benefits
 *               - vacancy
 *               - jobType
 *               - workingDays
 *             properties:
 *               title:
 *                 type: string
 *               location:
 *                 type: string
 *               type:
 *                 type: string
 *               department:
 *                 type: string
 *               lastDate:
 *                 type: string
 *                 format: date
 *               jobDescription:
 *                 type: string
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *               benefits:
 *                 type: array
 *                 items:
 *                   type: string
 *               vacancy:
 *                 type: integer
 *                 minimum: 1
 *               jobType:
 *                 type: string
 *               workingDays:
 *                 type: string
 *                 description: Working days (e.g., "Monday - Friday")
 *             example:
 *               title: Software Engineer
 *               location: New York
 *               type: Full-time
 *               department: Engineering
 *               lastDate: 2024-09-30
 *               jobDescription: Responsible for developing software applications.
 *               responsibilities:
 *                 - Write and maintain code
 *                 - Collaborate with team members
 *               requirements:
 *                 - Bachelor's degree in Computer Science
 *                 - 3+ years of experience
 *               benefits:
 *                 - Health insurance
 *                 - 401(k) plan
 *               vacancy: 3
 *               jobType: Full-time
 *               workingDays: Monday - Friday
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 location:
 *                   type: string
 *                 type:
 *                   type: string
 *                 department:
 *                   type: string
 *                 lastDate:
 *                   type: string
 *                   format: date
 *                 jobDescription:
 *                   type: string
 *                 responsibilities:
 *                   type: array
 *                   items:
 *                     type: string
 *                 requirements:
 *                   type: array
 *                   items:
 *                     type: string
 *                 benefits:
 *                   type: array
 *                   items:
 *                     type: string
 *                 vacancy:
 *                   type: integer
 *                 jobType:
 *                   type: string
 *                 workingDays:
 *                   type: string
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 * /career/job-list/{id}:
 *   get:
 *     summary: Retrieve a specific job posting by ID
 *     description: Fetches the job posting details based on the job ID.
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the job
 *     responses:
 *       "200":
 *         description: The details of the job posting
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 location:
 *                   type: string
 *                 type:
 *                   type: string
 *                 department:
 *                   type: string
 *                 lastDate:
 *                   type: string
 *                   format: date
 *                 jobDescription:
 *                   type: string
 *                 responsibilities:
 *                   type: array
 *                   items:
 *                     type: string
 *                 requirements:
 *                   type: array
 *                   items:
 *                     type: string
 *                 benefits:
 *                   type: array
 *                   items:
 *                     type: string
 *                 vacancy:
 *                   type: integer
 *                 jobType:
 *                   type: string
 *                 workingDays:
 *                   type: string
 *       "404":
 *         description: Job not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 */
