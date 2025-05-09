export default {
  async fetch(request) {
    const url = new URL(request.url);
    const slug = url.pathname.slice(1);

    const res = await fetch("https://raw.githubusercontent.com/aryokid/shortlink/main/links.json", {
      headers: { 'Cache-Control': 'no-cache' }
    });

    if (!res.ok) {
      return new Response("Gagal ambil data link", { status: 500 });
    }

    const data = await res.json();

    if (slug in data) {
      return Response.redirect(data[slug], 302);
    } else {
      return new Response("Link tidak ditemukan", { status: 404 });
    }
  }
}
