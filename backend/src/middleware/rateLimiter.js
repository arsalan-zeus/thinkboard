import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
 try {
//    const identifier = req.ip; // Use IP address as identifier
   const result = await ratelimit.limit("my-rate-limit");

   if (!result.success) {
     return res.status(429).json({
       message: "Too many requests, please try again later.",
     });
   }

   next();
 } catch (error) {
   console.log("Rate limiter error:", error);
   next(error); // Pass the error to the next middleware
 }
}

export default rateLimiter;