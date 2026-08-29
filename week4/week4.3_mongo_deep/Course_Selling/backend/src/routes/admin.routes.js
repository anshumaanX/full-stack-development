import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import requireRole from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/test', authMiddleware,requireRole('ADMIN'), 
  (req,res) => {
    return res.status(200).json({
      success: true,
      message: 'Admin route accessed successfully',
      user: req.user,
    });
  }
);

export default router;