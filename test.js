import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "BKAYgjZeg8ceZU6I7Q__h4chv_E8vjVJ",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);