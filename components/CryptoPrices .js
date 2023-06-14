import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/crypto");
        console.log('Hola',response.data.data);

        setCryptoData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function extraerNumeroDeURL(url) {
    const regex = /images\/(\d+)\//;
    const match = url.match(regex);
    if (match && match.length > 1) {
      return match[1];
    }
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border border-black m-6">
      {cryptoData &&
        cryptoData.map((crypto) => {

          return <div key={crypto.id} className="bg-gray-200 p-4 rounded shadow border border-black">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{crypto.name}</h2>
              {crypto.image && (
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-16 h-16"
                />
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <p className="text-pink-500 text-4xl font-semibold">Price:</p>
              <p className="text-gray-600 text-4xl font-semibold">{crypto.current_price}</p>

              <p className="text-gray-800 font-semibold">Market Cap:</p>
              <p className="text-gray-600">{crypto.market_cap}</p>

              <p className="text-gray-800 font-semibold">24h Change:</p>
              <p className="text-gray-600">
                {crypto.price_change_percentage_24h}%
              </p>

              <p className="text-gray-800 font-semibold">Total Volume:</p>
              <p className="text-gray-600">{crypto.total_volume}</p>

              <p className="text-gray-800 font-semibold">Circulating Supply:</p>
              <p className="text-gray-600">{crypto.circulating_supply}</p>

              <p className="text-gray-800 font-semibold">Total Supply:</p>
              <p className="text-gray-600">{crypto.total_supply}</p>

              <p className="text-gray-800 font-semibold">Market Cap Rank:</p>
              <p className="text-gray-600">{crypto.market_cap_rank}</p>

              <p className="text-gray-800 font-semibold">All Time High:</p>
              <p className="text-gray-600">{crypto.ath}</p>

              <p className="text-gray-800 font-semibold">
                ATH Change Percentage:
              </p>
              <p className="text-gray-600">{crypto.ath_change_percentage}%</p>

              <p className="text-gray-800 font-semibold">ATH Date:</p>
              <p className="text-gray-600">{crypto.ath_date}</p>

              <p className="text-gray-800 font-semibold">High 24h:</p>
              <p className="text-gray-600">{crypto.high_24h}</p>

              <p className="text-gray-800 font-semibold">Low 24h:</p>
              <p className="text-gray-600">{crypto.low_24h}</p>

              <p className="text-gray-800 font-semibold">Price Change 24h:</p>
              <p className="text-gray-600">{crypto.price_change_24h}</p>

              {crypto.price_change_percentage_7d !== undefined && (
                <>
                  <p className="text-gray-800 font-semibold">
                    Price Change Percentage 7d:
                  </p>
                  <p className="text-gray-600">
                    {crypto.price_change_percentage_7d}
                  </p>
                </>
              )}

              <p className="text-gray-800 font-semibold">Last Updated:</p>
              <p className="text-gray-600">{crypto.last_updated}</p>

              <p className="text-gray-800 font-semibold">
                Price Change Percentage 7d:
              </p>
              <p className="text-gray-600">
                {crypto.price_change_percentage_7d}
              </p>

              <p className="text-gray-800 font-semibold">Last Updated:</p>
              <p className="text-gray-600">{crypto.last_updated}</p>

              {/* ... Agrega las demás propiedades de la criptomoneda aquí */}
            </div>

            <div className="bg-white flex flex-col justify-center items-center m-16 mx-20 border border-black hover-bordered-black ">
            <img
              src={`https://www.coingecko.com/coins/${extraerNumeroDeURL(crypto.image)}/sparkline.svg`}
              alt="Sparkline"
              className=" w-64 h-48 "
            />
            </div>
          </div>
        }
        )}
    </div>
  );
};

export default CryptoPrices;
