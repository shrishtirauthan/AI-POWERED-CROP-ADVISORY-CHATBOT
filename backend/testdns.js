import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.cluster0.mm4fpfe.mongodb.net",
  (err, addresses) => {
    console.log(err);
    console.log(addresses);
  }
);