import redis from "redis";

const REDIS_PORT = process.env.PORT || 6379;
const DEFAULT_EXPIRATION = 600;

const redisCLient = redis.createClient(REDIS_PORT);

const redisCache = async (req, res, next) => {
  const { section } = req.params;

  redisCLient.get(section, (err, data) => {
    if (err) throw Error(err);
    if (data !== null) return res.send(JSON.parse(data));
    next();
  });
};

const setCache = (key, value) => {
  redisCLient.setex(key, DEFAULT_EXPIRATION, value);
};

export { redisCache, setCache };
