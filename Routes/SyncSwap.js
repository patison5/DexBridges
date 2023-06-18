const { SyncSwapController } = require('./../Controllers')
const express = require('express');

const router = express.Router();

router.get('/SyncSwap/SwapCoins', SyncSwapController.SwapCoins);

module.exports = router;