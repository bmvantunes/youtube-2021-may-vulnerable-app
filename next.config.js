module.exports = {
  async headers() {
    return [
      {
        source: "/secure-header",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'`,
          },
        ],
      },
    ];
  },
};
