import axios from 'axios';




//  Changed to handler
const handler = async (req, res) => {
    
    const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",

        {
          params: {
            vs_currency: "usd",
            ids: "bitcoin,ethereum,litecoin,tether,tether-gold,usd-coin,binancecoin,ripple,staked-ether,cardano,dogecoin,solana,matic-network,tron,polkadot,binance-usd,wrapped-bitcoin,shiba-inu,avalanche-2,dai",
          },
        }
      );

      
  

    res.status(200).json({ data: response.data })

}

export default handler