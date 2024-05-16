import { generateAvatar } from "./src/avatar";
import { generateInitials } from "./utils/initialsUtils";

const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname !== "/") {
      return new Response("Not Found", { status: 404 });
    }
    let initials = url.searchParams.get("i");
    const name = url.searchParams.get("name");
    const bgColor = url.searchParams.get("clr") || "595959";
    if (!initials && name) {
      initials = generateInitials(name);
    }
    return new Response(generateAvatar(initials, "#" + bgColor), {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  },
  port: 3000,
});
console.log(`Listening on ${server.url}`);
