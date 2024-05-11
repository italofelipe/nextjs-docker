import axios from 'axios';

const fetchData = () => {
  return axios
    .get<ApiResponse>('https://brapi.dev/api/quote/PETR4', {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error('Houve um erro', err);

      return null;
    });
};


const Home = async () => {
  
  const data = await fetchData();

  console.log('Data', data);

  return (
    <div>
      <h1>Template Next.js com Docker</h1>
      <h2>Ação: {data?.results[0].longName}</h2>
    </div>
  );
};

export default Home;

interface ApiResponse {
  results: Result[];
  requestedAt: string;
  took: string;
}

interface Result {
  currency: string;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  marketCap: number;
  shortName: string;
  longName: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: string;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayRange: string;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  symbol: string;
  priceEarnings: number;
  earningsPerShare: number;
  logourl: string;
}
