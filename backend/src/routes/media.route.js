import expres from 'express';
import mediaController from '../controllers/media.controller.js';

const router = expres.Router({ mergeParams: true });

router.get('/search', mediaController.search);
router.get('/genres', mediaController.getGenres);
router.get('/detail/:mediaId', mediaController.getDetail);
router.get('/:mediaCategory', mediaController.getList);

export default router;
