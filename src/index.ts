export default {
  async fetch(request): Promise<Response> {
    const { cf } = request;
    const ip = request.headers.get("cf-connecting-ip");

    const geoData = {
      ip: ip || "Unknown",
      city: cf?.city || "Unknown",
      region: cf?.region || "Unknown",
      country: cf?.country || "Unknown",
      continent: cf?.continent || "Unknown",
      loc: `${cf?.latitude || "Unknown"},${cf?.longitude || "Unknown"}`,
      postal: cf?.postalCode || "Unknown",
      metroCode: cf?.metroCode || "Unknown",
      regionCode: cf?.regionCode || "Unknown",
      timezone: cf?.timezone || "Unknown",
      colo: cf?.colo || "Unknown",
      asn: cf?.asn || "Unknown",
      isp: cf?.isp || "Unknown",
      org: cf?.org || "Unknown",
    };

    return new Response(JSON.stringify(geoData, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  },
} satisfies ExportedHandler;
