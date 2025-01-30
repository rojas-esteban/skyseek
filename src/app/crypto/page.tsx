"use client"
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import type { CoinMarketData, CoinData, HistoricItem } from "../../types/cryptoDevi";
import Image from "next/image";

export default function Coingecko() {

  const [divisas, setDivisas] = useState<CoinData | null>(null);
  const [historicDva, setHistoricDva] = useState<CoinMarketData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState<string>("");

  

//   useEffect(() => {
//     const getDataDva = async () => {
//       setIsLoading(true);
//       try {
//         const responseHistoricDva = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365");
//         const data = await responseHistoricDva.json();
//         setHistoricDva(data.prices);
//       } catch (error) {
//         setError('No se pudo cargar los datos históricos.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getDataDva();
//   }, []);

const fechaNormal = divisas ? new Date(divisas.last_updated).toLocaleString() : '';

const handleSubmit = async (e: React.FormEvent) => {
    console.log("heeeeere2");
    
    e.preventDefault();
    setIsLoading(true);
  
};


useEffect(() => {
    const getDataCoins = async () => {
      
      setIsLoading(true);
      try {
        console.log("heeeeere3");

        const responseInfoAbaut = await fetch(`https://api.coingecko.com/api/v3/coins/${question ||"bitcoin"}/`);
        if (!responseInfoAbaut.ok) throw new Error('Error al obtener los datos');
        const data = await responseInfoAbaut.json();
        setDivisas(data);
      } catch (error) {
        setError('No se pudo cargar la información.');
      } finally {
        setIsLoading(false);
      }
    };
    getDataCoins();
  }, [question]);



  return (
    <div className="flex flex-col gap-8 mt-12 h-screen">



      {isLoading ? (
        <Loader />
      ) : (

        

        
          <div className="flex justify-center gap-4">
            <p>Choisis ta crypto ➡️</p>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center sm:flex-row gap-4">
            <select
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="text-violet-700 bg-black text-center"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="chainlink">Chainlink</option>
              <option value="solana">Solana</option>
              <option value="aave">Aave</option>
              <option value="cardano">Cardano</option>
              <option value="polkadot">Polkadot</option>
              <option value="dogecoin">Dogecoin</option>
              <option value="pepe">Pepe</option>
            </select>
            
                    </form>
          </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {divisas ? (

          
        <div className="flex flex-col w-screen bg-deepTeal justify-center">

            <div className="flex items-center justify-center space-x-4 p-2">
            <h1 className="text-3xl text-calipso font-bold">{divisas.name}</h1>
              <Image
                src={divisas.image.large}
                alt="Descripción de la imagen"
                width={300}
                height={300}
                className="rounded-lg bg-black shadow-xl p-5 border-green-200 w-auto h-auto object-cover sm:max-w-md"
              />
            </div>
            <h3 className="text-center  text-calipso font-bold">Données mises à jour le: {fechaNormal}</h3>

            <p className="text-white text-center m-4">
              Le prix actuel de {divisas.name} est de <span className="text-blue-500 font-bold">{divisas.market_data.current_price.usd}</span>USD, et son ATH est de <span className="text-blue-500 font-bold">{divisas.market_data.ath.usd}</span>USD.
            </p>


            <p className="text-white text-center m-4">
            <span className="text-blue-500 font-bold">{divisas.sentiment_votes_up_percentage}% </span> du marché retail pense que le prix du {divisas.name} va augmenter, tandis que <span className="text-blue-500 font-bold">{divisas.sentiment_votes_down_percentage} %</span> pensent qu'il va baisser
            </p>

            <p className="text-white text-center m-4">
              {divisas.name} est positionnée comme la cryptomonnaie <span className="text-blue-500 font-bold">numéro {divisas.market_cap_rank}</span> en capitalisation boursière avec un market cap de <span className="text-blue-500 font-bold">{divisas.market_data.market_cap.usd.toLocaleString()}</span> USD. 
            </p>

            <p className="text-white text-center m-4">
              Il existe <span className="text-blue-500 font-bold">{Number(divisas.watchlist_portfolio_users).toLocaleString()}</span> portefeuilles actifs de {divisas.name}.
            </p>

          <h2 className="text-2xl text-calipso font-bold text-center">Fluctuation des prix du {divisas.name}</h2>
          <ul className="list-none text-center space-y-2">
             <li className={divisas.market_data.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>
               24 heures: {divisas.market_data.price_change_percentage_24h.toFixed(2)}%
             </li>
             <li className={divisas.market_data.price_change_percentage_7d > 0 ? "text-green-500" : "text-red-500"}>
               7 jours : {divisas.market_data.price_change_percentage_7d.toFixed(2)}%
             </li>
             <li className={divisas.market_data.price_change_percentage_14d > 0 ? "text-green-500" : "text-red-500"}>
               14 jours: {divisas.market_data.price_change_percentage_14d.toFixed(2)}%
             </li>
             <li className={divisas.market_data.price_change_percentage_30d > 0 ? "text-green-500" : "text-red-500"}>
               30 jours: {divisas.market_data.price_change_percentage_30d.toFixed(2)}%
             </li>
             <li className={divisas.market_data.price_change_percentage_60d > 0 ? "text-green-500" : "text-red-500"}>
               60 jours: {divisas.market_data.price_change_percentage_60d.toFixed(2)}%
             </li>
             <li className={divisas.market_data.price_change_percentage_200d > 0 ? "text-green-500" : "text-red-500"}>
               200 jours: {divisas.market_data.price_change_percentage_200d.toFixed(2)}%
             </li>
             <li className={divisas.market_data.price_change_percentage_1y > 0 ? "text-green-500" : "text-red-500"}>
               1 an: {divisas.market_data.price_change_percentage_1y.toFixed(2)}%
             </li>
            </ul>

                    
          <div className="flex  mb-16 justify-center ">
                <div className="text-center m-4">
                    <h2 className="text-2xl text-calipso font-bold text-center">Données de l'offre</h2>
                    <ul className="list-none">
                      { divisas.market_data.max_supply 
                      ? (<li>Le supply maximum de {divisas.name} est de <span className="text-blue-500 font-bold">{divisas.market_data.max_supply.toLocaleString()}</span> </li>)
                      : ""}
                      {divisas.market_data.max_supply
                      ? (<li>Le supply circulant actuel de {divisas.name} est de <span className="text-blue-500 font-bold" >{divisas.market_data.total_supply.toLocaleString()}</span>, soit <span className="text-blue-500 font-bold">{((divisas.market_data.total_supply / divisas.market_data.max_supply) * 100).toFixed(2)}%</span> du total. </li>)
                      :""}
                      <li>Il est possible de créer plus de {divisas.name} ? :  <span className="text-blue-500 font-bold">{divisas.market_data.max_supply_infinite ? "YES" : "NO"}</span>.</li>
                    </ul>
                </div>
              
                <div className="text-center m-4">
                    <h2  className="text-2xl text-calipso font-bold text-center" >{divisas.name} {fechaNormal}:</h2>
                    <ul className="list-none">
                      <li>USD: $ <span className="text-blue-500 " > {divisas.market_data.current_price.usd.toLocaleString()}
                        </span> </li>
                      <li>EUR: € <span className="text-blue-500 " > {divisas.market_data.current_price.eur.toLocaleString()}
                        </span> </li>
                      <li>BTC: Ƀ <span className="text-blue-500 " > {divisas.market_data.current_price.btc.toFixed(5)}
                        </span> </li>
                      <li>CLP: $ <span className="text-blue-500 " > {divisas.market_data.current_price.clp.toLocaleString()}
                        </span> </li>
                      <li>ARS: $ <span className="text-blue-500 " > {divisas.market_data.current_price.ars.toLocaleString()}
                        </span> </li>
                      <li>AUD: $ <span className="text-blue-500 " > {divisas.market_data.current_price.aud.toLocaleString()}
                        </span> </li>
                      <li>CAD: $ <span className="text-blue-500 " > {divisas.market_data.current_price.cad.toLocaleString()}
                        </span> </li>
                    </ul>
                </div>
             </div>
        </div>
      ) : (
        <p>Choisissez une cryptomonnaie pour voir ses données mises à jour</p>
      )}

      {/* {historicDva && divisas ? (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-right">Fecha</th>
              <th className="px-4 py-2 text-left">Valor</th>
            </tr>
          </thead>
          <tbody>
            {(historicDva).slice().reverse().map((item: HistoricItem, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-right">{new Date(item[0]).toLocaleDateString()}</td>
                <td className="px-4 py-2 text-left">{item[1].toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando.........BTC</p>
      )} */}
    </div>
  );
}
