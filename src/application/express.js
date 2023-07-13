import schoolRoutes from '#application/routes/schools.routes.js';
import personsRoutes from '#application/routes/persons.routes.js';
import schoolHistoryRoutes from '#application/routes/schoolHistory.routes.js';
import beltHistory from '#application/routes/beltHistory.routes.js';
import danHistory from '#application/routes/danHistory.routes.js';
import specialization from '#application/routes/specialization.routes.js';

import { DOCUMENTATION } from '#utils/documentation/doc.js';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { moderatorRoutes } from './routes/moderators.routes.js';

export const application = express();

// middlewares
application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use('/docs', swaggerUi.serve, swaggerUi.setup(DOCUMENTATION));

// routes
application.use('/api/v1', schoolRoutes);
application.use('/api/v1', moderatorRoutes);
application.use('/api/v1', personsRoutes);
application.use('/api/v1', schoolHistoryRoutes);
application.use('/api/v1', beltHistory);
application.use('/api/v1', danHistory);
application.use('/api/v1', specialization);

// handle error
application.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
application.use((err, req, res, next) => {
    console.log(err.message, err.stack);
    return res.status(500).send(err.message);
});
