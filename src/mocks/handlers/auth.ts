import { HttpResponse, http } from "msw";

export const authHandlers = [
  http.get("/login", ({ request, params, cookies }) => {
    return HttpResponse.json("Success");
  }),
];
