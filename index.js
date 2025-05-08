const links = {
  'yt': 'https://youtube.com/@aryokid',
  'ig': 'https://instagram.com/aryokid',
  'gh': 'https://github.com/aryokid',
  // Tambah link sesukamu
}

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname.slice(1)

    if (path in links) {
      return Response.redirect(links[path], 302)
    }

    return new Response('Link tidak ditemukan', { status: 404 })
  }
}
