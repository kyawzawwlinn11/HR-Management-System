require('dotenv').config();

const express = require('express');
const app =  express();

//Router imports
const regionsRouter = require('./api/regions/regions route');
const countriesRouter =  require('./api/countries/countries.route');
const locationsRouter =  require('./api/locations/locations.router');
const departmentsRouter =  require('./api/departments/departments.route');
const jobsRouter =  require('./api/jobs/jobs.route');
const employeesRouter =  require('./api/employees/employees.route');
const jobhistoryRouter =  require('./api/jobhistory/jobhistory.route');
const adminRouter =  require('./api/admins/admins.route');

 
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on ${process.env.APP_PORT}`);
})

//Routers registrations
app.use('/regions', regionsRouter);
app.use('/countries', countriesRouter);
app.use('/locations', locationsRouter);
app.use('/departments', departmentsRouter);
app.use('/jobs', jobsRouter);
app.use('/employees', employeesRouter);
app.use('/jobhistory', jobhistoryRouter);
app.use('/admin', adminRouter);
