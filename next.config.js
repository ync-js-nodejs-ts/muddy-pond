module.exports = {
  images: {
    domains: [
      'i.ytimg.com',
      'firebasestorage.googleapis.com',
      'localhost',
      'res.cloudinary.com',
      'picsum.photos' // Esto solo de prueba
    ],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(gif|png|webp|jpe?g)$/i,
      use: [
        {
          loader: 'lqip-modern-loader'
        }
      ]
    })

    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|webp|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    })

    return config
  }
}
