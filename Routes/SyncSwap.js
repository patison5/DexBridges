const { SyncSwapController } = require('./../Controllers')
const express = require('express');

const router = express.Router();

router.get('/SyncSwap/Pool/GetVault', SyncSwapController.SwapCoins);
router.get('/SyncSwap/Pool/GetWETH', SyncSwapController.SwapCoins);
router.get('/SyncSwap/Pool/SwapCoins', SyncSwapController.SwapCoins);
router.get('/SyncSwap/Pool/SwapWithPermit', SyncSwapController.SwapCoins);

module.exports = router;