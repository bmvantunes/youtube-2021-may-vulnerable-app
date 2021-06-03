module.exports = {
  async headers() {
    return [
      {
        source: "/secure",
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
