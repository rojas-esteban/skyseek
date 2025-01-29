export interface MarketData {
    ath: {
      usd: number;
    };
    current_price: {
      usd: number;
      eur: number;
      btc: number;
      clp: number;
      ars: number;
      aud: number;
      cad: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    total_supply: number;
    max_supply: number;
    market_cap: {
      usd: number;
    };
    max_supply_infinite: boolean;
}
  
interface CoinData {
    id: string;
    symbol: string;
    name: string;
    web_slug: string;
    asset_platform_id: string | null;
    platforms: object;
    detail_platforms: object;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    preview_listing: boolean;
    public_notice: string | null;
    additional_notices: string[];
    localization: object;
    description: object;
    links: {
      blockchain_site: string[];
    };
    image: {
      large: string;     
    };
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    watchlist_portfolio_users: number;
    market_cap_rank: number;
    market_data: MarketData;
    community_data: {
      facebook_likes: number | null;
      twitter_followers: number;
      reddit_average_posts_48h: number;
      reddit_average_comments_48h: number;
      reddit_subscribers: number;
      reddit_accounts_active_48h: number;
      telegram_channel_user_count: number | null;
    };
    developer_data: object;
    status_updates: string[];
    last_updated: string;
    tickers: string[];
}
  
export interface CoinMarketData {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}
  
export interface HistoricItem {
    0: number; // Fecha en milisegundos
    1: number; // Precio
}
  